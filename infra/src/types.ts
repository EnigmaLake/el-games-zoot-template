import * as pulumi from "@pulumi/pulumi";

type VPC = {
  id: string;
  privateSubnetsIDs: string[];
  privateSubnetsCIDRs: string[];
  privatePersistenceSubnetsIDs: string[];
  publicSubnetsIDs: string[];
  vpcDefaultSecurityGroupID: string;
  vpnSecurityGroupID: string;
};
export type VPCOutput = pulumi.Output<VPC>;
