import cors from "cors";
import * as http from "http";
import express from "express";
import * as bodyParser from "body-parser";
import { createRgsService } from "@enigma-lake/zoot-game-rgs-service-sdk";

import { config } from "../config";
import { errorHandler } from "./middlewars/error-handler";
import { asyncWrapper } from "./middlewars/async-wrapper";
import { createHealthcheckRequestHandler } from "./controller/healthcheck";
import { createRegisterUserPlayRequestHandler } from "./controller/register-user-play";

/**
 * Creates the web server.
 */
export const createApiServer = (): {
  server: http.Server;
  start: () => void;
  stop: () => void;
} => {
  const port = config.port;

  const app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const router = express.Router();

  app.use("/", router);

  app.use(errorHandler);

  const rgsService = createRgsService({
    rgsAPIHost: config.rgsAPIHost,
    rgsGameId: config.rgsGameId.toString(),
    rgsBearerToken: config.rgsBearerToken,
  });

  // Request handlers
  const healthcheckRequestHandler = createHealthcheckRequestHandler();
  const registerUserPlayRequestHandler = createRegisterUserPlayRequestHandler({
    rgsService,
  });

  router.get("/healthcheck", asyncWrapper(healthcheckRequestHandler));

  router.post(
    "/register-user-play",
    asyncWrapper(registerUserPlayRequestHandler)
  );

  const server = http.createServer(app);
  return {
    start: () => {
      server.listen(port);
      console.log(`API running on port: ${port}`);
    },
    stop: () => {
      server.close();
      console.log(`API stopped`);
    },
    server,
  };
};
