import { RequestHandler } from "express";
import { CoinType, RgsService } from "@enigma-lake/zoot-game-rgs-service-sdk";

import { registerUserPlay } from "../../domain/register-user-play";

export const createRegisterUserPlayRequestHandler = ({
  rgsService,
}: {
  rgsService: RgsService;
}): RequestHandler => {
  return async (req, res) => {
    const {
      playAmountInCents,
      userId,
      userNickname,
      coinType,
      userAccessToken,
    } = req.body as {
      playAmountInCents?: number;
      userId?: number;
      userNickname?: string;
      coinType?: CoinType;
      userAccessToken?: string;
    };

    if (
      playAmountInCents === undefined ||
      userId === undefined ||
      userNickname === undefined ||
      coinType === undefined ||
      userAccessToken === undefined
    ) {
      throw new Error(
        JSON.stringify({
          message: "Invalid register-user-play request: missing fields",
          userId,
          userNickname,
          playAmountInCents,
          coinType,
          userAccessToken,
        })
      );
    }

    if (coinType !== CoinType.SWEEPS && coinType !== CoinType.GOLD) {
      throw new Error(
        JSON.stringify({
          message: "Invalid register-user-play request: coinType invalid",
          coinType,
        })
      );
    }

    if (playAmountInCents === 0 || playAmountInCents < 0) {
      throw new Error(
        JSON.stringify({
          message:
            "Invalid register-user-play request: playAmountInCents invalid",
          playAmountInCents,
        })
      );
    }

    const play = await registerUserPlay({
      rgsService,
      userId,
      userNickname,
      playAmountInCents,
      coinType,
      userAccessToken,
    });

    res.send({
      success: true,
      message: "User play registered",
      play,
    });
  };
};
