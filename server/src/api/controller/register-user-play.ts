import { RequestHandler } from "express";
import { RgsService } from "@enigma-lake/zoot-rgs-sdk";

import { CoinType } from "../../types";
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

    try {
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
    } catch (e) {
      if (e?.response.status === 403) {
        throw new Error(
          JSON.stringify({ message: "Guest users cannot play game rounds" })
        );
      }

      throw new Error(JSON.stringify({ message: e.response.data.message }));
    }
  };
};
