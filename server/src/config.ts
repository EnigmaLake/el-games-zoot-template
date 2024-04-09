import "dotenv/config";

// Load the environment variables.
const rawEnv = process.env;

export const config = {
  port: rawEnv.PORT ? Number(rawEnv.PORT) : 8089,

  rgsGameId: rawEnv.RGS_GAME_ID ?? -1,
  rgsAPIHost: rawEnv.RGS_API_HOST ?? "http://localhost:8080",

  rgsBearerToken: rawEnv.RGS_BEARER_TOKEN ?? "secret-123",
};
