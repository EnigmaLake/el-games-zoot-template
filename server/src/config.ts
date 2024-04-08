import "dotenv/config";

// Load the environment variables.
const rawEnv = process.env;

export const config = {
  port: rawEnv.PORT ? Number(rawEnv.PORT) : 8080,

  rgsGameId: rawEnv.RGS_GAME_ID ?? -1,
  rgsAPIHost: rawEnv.RGS_API_HOST ?? "https://rgs.dev.enigmalakecasino.com",

  rgsBearerToken: rawEnv.RGS_BEARER_TOKEN ?? "secret-123",
};

console.log({ config });
