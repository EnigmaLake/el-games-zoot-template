import { RiskTypes, RowNumbers } from "../game-round";
import { RgsService } from "../rgs-service/types";
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
    risk,
    rowNumber,
    playAmountInCents,
    coinType,
    accessToken,
  }: {
    userId?: number;
    userNickname?: string;
    risk: RiskTypes;
    rowNumber: RowNumbers;
    playAmountInCents?: number;
    coinType?: number;
    accessToken: string;
  }) => {
    if (
      playAmountInCents === undefined ||
      userId === undefined ||
      risk === undefined ||
      rowNumber === undefined ||
      userNickname === undefined ||
      coinType === undefined ||
      accessToken === undefined
    ) {
      throw new Error(
        JSON.stringify({
          message: "Invalid request: missing fields",
          userId,
          userNickname,
          risk,
          rowNumber,
          playAmountInCents,
          coinType,
          accessToken,
        })
      );
    }

    if (!Object.values(RiskTypes).includes(risk)) {
      throw new Error(
        JSON.stringify({
          message: "Invalid request: risk value is invalid",
        })
      );
    }

    if (!Object.values(RowNumbers).includes(rowNumber)) {
      throw new Error(
        JSON.stringify({
          message: "Invalid request: rowNumber is invalid",
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
      risk,
      rowNumber,
      playAmountInCents,
      coinType,
      accessToken,
    });
  };
};
