import { RgsService } from "@enigma-lake/zoot-game-rgs-service-sdk";

import { CoinType } from "../types";
import { registerUserPlay } from "../domain/register-user-play";

export const createRegisterUserPlayController = ({
  rgsService,
}: {
  rgsService: RgsService;
}) => {
  return async ({
    userId,
    userNickname,
    playAmountInCents,
    coinType,
    accessToken,
  }: {
    userId?: number;
    userNickname?: string;
    playAmountInCents?: number;
    coinType?: number;
    accessToken: string;
  }) => {
    if (
      playAmountInCents === undefined ||
      userId === undefined ||
      userNickname === undefined ||
      coinType === undefined ||
      accessToken === undefined
    ) {
      throw new Error(
        JSON.stringify({
          message: "Invalid request: missing fields",
          userId,
          userNickname,
          playAmountInCents,
          coinType,
          accessToken,
        })
      );
    }

    if (coinType !== CoinType.SWEEPS && coinType !== CoinType.GOLD) {
      throw new Error(
        JSON.stringify({
          message: "Invalid request: coinType invalid",
          coinType,
        })
      );
    }

    if (playAmountInCents === 0 || playAmountInCents < 0) {
      throw new Error(
        JSON.stringify({
          message: "Invalid request: playAmountInCents invalid",
          playAmountInCents,
        })
      );
    }

    return await registerUserPlay({
      rgsService,
      userId,
      userNickname,
      playAmountInCents,
      coinType,
      accessToken,
    });
  };
};
