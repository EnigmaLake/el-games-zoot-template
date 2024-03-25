import { createApiServer } from "./api/create-api-server";
import { attachSocketToServer as attachTemplateSocketToServer } from "./create-socket-server";
import { createTemplateGameControllers } from "./game-controllers";

const apiServer = createApiServer();

attachTemplateSocketToServer({
  server: apiServer.server,
  gameControllers: createTemplateGameControllers(),
  path: "/game",
});

const shutdownSignals = [
  "SIGINT",
  "SIGTERM",
  "uncaughtException",
  "unhandledRejection",
];

shutdownSignals.forEach((signal) =>
  process.on(signal, async (error: Error) => {
    console.log(`Caught signal: ${signal}`, error);
    // Shut down the API so that users can no longer register bets
    apiServer.stop();
  })
);

(async () => {
  apiServer.start();
})();
