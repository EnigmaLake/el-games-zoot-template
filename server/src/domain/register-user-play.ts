import { RgsService } from "@enigma-lake/zoot-game-rgs-service-sdk";

import { Play } from "../types";
import { RiskTypes, RowNumbers } from "../game-round";

export const registerUserPlay = async ({
  rgsService,
  userId,
  userNickname,
  risk,
  rowNumber,
  playAmountInCents,
  coinType,
  accessToken,
}: {
  rgsService: RgsService;
  userId: number;
  userNickname: string;
  risk: RiskTypes;
  rowNumber: RowNumbers;
  playAmountInCents: number;
  coinType: number;
  accessToken: string;
}) => {
  const { gameRoundUuid, startTimestamp } =
    await rgsService.initiateGameRound();

  if (!startTimestamp) {
    throw new Error(
      JSON.stringify({
        message: "Game round cannot have an undefined startTimestamp",
      })
    );
  }

  console.log({
    message: "Incoming registerUserPlay request",
    userId,
    userNickname,
    risk,
    rowNumber,
    playAmountInCents,
    coinType,
  });

  const play = await rgsService.registerUserPlay({
    userId,
    userNickname,
    playAmountInCents,
    gameRoundUuid,
    coinType,
    accessToken,
  });

  await rgsService.startGameRound({
    gameRoundUuid,
  });

  const winMultiplier = 0;
  const winAmountInCents = Math.round(playAmountInCents * winMultiplier);
  const playWinTimestamp = Date.now();
  const gameRoundCurrentProgressInMs = Date.now() - startTimestamp;

  console.log({
    playAmountInCents,
    winMultiplier,
    winAmountInCents,
    startTimestamp,
    playWinTimestamp,
    gameRoundCurrentProgressInMs,
  });

  await rgsService.registerPlayWin({
    userId,
    userNickname,
    gameRoundUuid,
    winAmountInCents,
    winMultiplier: winMultiplier.toString(),
    playWinTimestamp,
    gameRoundCurrentProgressInMs,
  });

  await rgsService.completeGameRound({
    gameRoundUuid,
    crashNumber: winMultiplier,
    gameRoundEndTimeInMs: Date.now(),
  });

  const playResult: Play = {
    gameRoundUuid,
    playId: play.playId,
    userId,
    userNickname,
    playAmountInCents,
    winAmountInCents,
    winMultiplier: winMultiplier.toString(),
    coinType: coinType,
  };

  return playResult;
};
