import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { VPCOutput } from "./types";

const namespace = `${pulumi.getProject()}-${pulumi.getStack()}`;
const cfg = new pulumi.Config();

const coreStack = new pulumi.StackReference(cfg.require("coreStackReference"));
const vpc = coreStack.getOutput("vpcOutput") as unknown as VPCOutput;

// A role that AWS assumes in order to *launch* the task (not the role that the task itself assumes)
const executionRole = new aws.iam.Role(`${namespace}_execution-role`, {
  description: `Allows the AWS ECS service to create and manage the ${namespace} service`,
  assumeRolePolicy: {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Principal: { Service: "ecs-tasks.amazonaws.com" },
        Action: "sts:AssumeRole",
      },
    ],
  },
});

// AWS-managed policy giving the above role some basic permissions it needs
const _executionPolicyBasic = new aws.iam.RolePolicyAttachment(
  `${namespace}-basic-ecs-policy`,
  {
    policyArn:
      "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy",
    role: executionRole,
  },
  { parent: executionRole }
);

// The role the actual task itself will assume when running
const taskRole = new aws.iam.Role(`${namespace}-task-role`, {
  assumeRolePolicy: {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Principal: {
          Service: "ecs-tasks.amazonaws.com",
        },
        Action: "sts:AssumeRole",
      },
    ],
  },
});

const taskRolePolicy = new aws.iam.RolePolicy(`${namespace}-task-role-policy`, {
  role: taskRole,
  policy: {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Action: ["kinesis:PutRecords"],
        Resource: "*",
      },
    ],
  },
});

const logGroupName = `/aws/ecs/${namespace}`;
const logGroup = new aws.cloudwatch.LogGroup(`${namespace}-log-group`, {
  name: logGroupName,
  retentionInDays: cfg.requireNumber("logsRetentionInDays"),
});

const logResourcePolicyDocument = aws.iam.getPolicyDocument({
  statements: [
    {
      actions: [
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:PutLogEventsBatch",
      ],
      resources: ["arn:aws:logs:*"],
      principals: [
        {
          identifiers: ["es.amazonaws.com"],
          type: "Service",
        },
      ],
    },
  ],
});

const logResourcePolicy = new aws.cloudwatch.LogResourcePolicy(
  `${namespace}-log-resource-policy`,
  {
    policyDocument: logResourcePolicyDocument.then(
      (policyDocument) => policyDocument.json
    ),
    policyName: "log-publishing-policy",
  }
);

const storedRdsPassword = pulumi.output(
  aws.secretsmanager.getSecretVersion({
    secretId: cfg.require("rds_password_arn"),
  })
);

const storedRgsBearerToken = pulumi.output(
  aws.secretsmanager.getSecretVersion({
    secretId: cfg.require("rgsBearerTokenArn"),
  })
);

const sharedECRRepositoryURI =
  "975050002907.dkr.ecr.us-east-1.amazonaws.com/shared-ecr-repository";
const taskDefinition = new aws.ecs.TaskDefinition(
  `${namespace}-task-definition`,
  {
    family: `TaskDefinition-${namespace}`,
    containerDefinitions: pulumi
      .all([
        logGroup.name,
        storedRdsPassword.secretString,
        storedRgsBearerToken.secretString,
      ])
      .apply(([awsLogGroupName, rdsDbPassword, rgsBearerToken]) =>
        JSON.stringify([
          {
            name: "service",
            image: `${sharedECRRepositoryURI}:${cfg.require("imageTag")}`,
            cpu: 256,
            memory: 512,
            essential: true,
            logConfiguration: {
              logDriver: "awslogs",
              options: {
                "awslogs-region": aws.config.requireRegion().toString(),
                "awslogs-group": awsLogGroupName,
                "awslogs-stream-prefix": namespace,
              },
            },
            portMappings: [
              {
                containerPort: 8080,
                hostPort: 8080,
                protocol: "tcp",
              },
            ],
            environment: [
              {
                name: "PORT",
                value: "8080",
              },
              {
                name: "RGS_GAME_ID",
                value: cfg.require("rgsGameId"),
              },
              {
                name: "RGS_API_HOST",
                value: cfg.require("rgsApiHost"),
              },
              {
                name: "RGS_BEARER_TOKEN",
                value: rgsBearerToken,
              },
              {
                name: "AUTH_API_HOST",
                value: cfg.require("authApiHost"),
              },
            ],
          },
        ])
      ),
    executionRoleArn: executionRole.arn,
    taskRoleArn: taskRole.arn,
    cpu: "256",
    memory: "512",
    requiresCompatibilities: ["FARGATE"],
    networkMode: "awsvpc",
  },
  { dependsOn: logGroup }
);

// Create a ALB
const loadBalancer = new aws.lb.LoadBalancer(`${namespace}-alb`, {
  loadBalancerType: "application",
  subnets: vpc.publicSubnetsIDs,
  securityGroups: [vpc.vpcDefaultSecurityGroupID],
});

// Create a target group for the ALB
const targetGroup = new aws.lb.TargetGroup(`${namespace}-alb-tg`, {
  port: 8080,
  protocol: "HTTP",
  targetType: "ip",
  vpcId: vpc.id,
  healthCheck: {
    enabled: true,
    path: "/healthcheck",
    protocol: "HTTP",
    interval: 30,
    timeout: 5,
    healthyThreshold: 2,
    unhealthyThreshold: 2,
  },
});

// Create a HTTP listener for the ALB
const httpListener = new aws.lb.Listener(`${namespace}-http-listener`, {
  loadBalancerArn: loadBalancer.arn,
  port: 80,
  defaultActions: [
    {
      type: "forward",
      targetGroupArn: targetGroup.arn,
    },
  ],
});

const httpsListener = new aws.lb.Listener(`${namespace}-https-listener`, {
  loadBalancerArn: loadBalancer.arn,
  port: 443,
  protocol: "HTTPS",
  sslPolicy: "ELBSecurityPolicy-TLS-1-2-2017-01",
  certificateArn: cfg.require("acmCertificateArn"),
  defaultActions: [
    {
      type: "forward",
      targetGroupArn: targetGroup.arn,
    },
  ],
});

// Create a CNAME record to point the subdomain to the ALB DNS name
const _subdomainRecord = new aws.route53.Record(`${namespace}-subdomain`, {
  zoneId: cfg.require("hostZoneId"),
  name: `template-api.${cfg.require("hostZoneName")}`,
  type: "CNAME",
  ttl: 300,
  records: [loadBalancer.dnsName],
});

const service = new aws.ecs.Service(`${namespace}-ecs-service`, {
  cluster: coreStack.getOutput("clusterId"),
  launchType: "FARGATE",
  taskDefinition: taskDefinition.arn,
  desiredCount: 1,
  loadBalancers: [
    {
      targetGroupArn: targetGroup.arn,
      containerPort: 8080,
      containerName: "service",
    },
  ],
  networkConfiguration: {
    subnets: vpc.privateSubnetsIDs,
    assignPublicIp: false,
    securityGroups: [vpc.vpcDefaultSecurityGroupID],
  },
  deploymentMinimumHealthyPercent: 0,
  deploymentMaximumPercent: 100,
});

// Create a WAF Web ACL
const webAcl = new aws.wafv2.WebAcl(`${namespace}-web-acl`, {
  scope: "REGIONAL",
  defaultAction: { allow: {} },
  visibilityConfig: {
    cloudwatchMetricsEnabled: true,
    metricName: "webAcl",
    sampledRequestsEnabled: true,
  },
  rules: [],
});

// Associate WAF ACL with the ALB
const albAclAssociation = new aws.wafv2.WebAclAssociation(
  `${namespace}-waf-alb-association`,
  {
    resourceArn: loadBalancer.arn,
    webAclArn: webAcl.arn,
  }
);

export const ecsServiceName = service.name;
export const ecsTaskDefinitionArn = taskDefinition.arn;
export const albDnsName = loadBalancer.dnsName;
export const wafWebAclArn = webAcl.arn;
