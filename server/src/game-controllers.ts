import { createRgsService } from "@enigma-lake/zoot-game-rgs-service-sdk";

import { config } from "./config";
import { IncomingSocketEventPayload } from "./types";
import { createRegisterUserPlayController } from "./controller/register-user-play";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createTemplateGameControllers = () => {
  const rgsService = createRgsService({
    rgsAPIHost: config.rgsAPIHost,
    rgsGameId: config.rgsGameId.toString(),
    rgsBearerToken: config.rgsBearerToken,
  });

  const registerUserPlay = createRegisterUserPlayController({
    rgsService,
  });

  const playRegisterController = async ({
    socketId,
    payload,
  }: {
    socketId: string;
    payload: IncomingSocketEventPayload;
  }) => {
    console.log({
      message: `Called playRegisterController on ${socketId}`,
      userId: payload.userId,
      playAmountInCents: payload.playAmountInCents,
      coinType: payload.coinType,
    });

    return await registerUserPlay({
      userId: payload.userId,
      userNickname: payload.userNickname,
      playAmountInCents: payload.playAmountInCents as number,
      coinType: payload.coinType as number,
      accessToken: payload.accessToken as string,
    });
  };

  return {
    playRegisterController,
  };
};
