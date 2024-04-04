import { createRgsService } from "@enigma-lake/zoot-game-rgs-service-sdk";

import { config } from "./config";
import { IncomingSocketEventPayload } from "./types";
import { RiskTypes, RowNumbers } from "./game-round";
import { createRegisterUserPlayController } from "./controller/register-user-play";

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
      rowNumber: payload.rowNumber as RowNumbers,
      risk: payload.risk as RiskTypes,
      accessToken: payload.accessToken as string,
    });
  };

  return {
    playRegisterController,
  };
};
