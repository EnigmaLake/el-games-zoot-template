import { RgsService } from "@enigma-lake/zoot-rgs-sdk";
import { Play } from "../types";

export const registerUserPlay = async ({
  rgsService,
  userId,
  userNickname,
  playAmountInCents,
  coinType,
  userAccessToken,
}: {
  rgsService: RgsService;
  userId: number;
  userNickname: string;
  playAmountInCents: number;
  coinType: number;
  userAccessToken: string;
}) => {
  console.log({
    message: "Incoming registerUserPlay request",
    userId,
    userNickname,
    playAmountInCents,
    coinType,
  });

  const { gameRoundUuid, startTimestamp } =
    await rgsService.initiateGameRound();

  if (!startTimestamp) {
    throw new Error(
      JSON.stringify({
        message: "Game round cannot have an undefined startTimestamp",
      })
    );
  }

  const play = await rgsService.registerUserPlay({
    userId,
    userNickname,
    playAmountInCents,
    gameRoundUuid,
    coinType,
    userAccessToken,
  });

  await rgsService.startGameRound({
    gameRoundUuid,
  });

  const winMultiplier = 1;
  const winAmountInCents = Math.round(playAmountInCents * winMultiplier);
  const playWinTimestamp = Date.now();
  const gameRoundCurrentProgressInMs = Date.now() - startTimestamp;

  if (winAmountInCents < 0 || winAmountInCents === 0) {
    await rgsService.registerPlayLose({
      userId,
      userNickname,
      gameRoundUuid,
      gameRoundEndTimeInMs: Date.now(),
    });
  } else {
    await rgsService.registerPlayWin({
      userId,
      userNickname,
      gameRoundUuid,
      winAmountInCents,
      winMultiplier: winMultiplier.toString(),
      playWinTimestamp,
      gameRoundCurrentProgressInMs,
    });
  }

  await rgsService.completeGameRound({
    gameRoundUuid,
    winMultiplier: winMultiplier.toString(),
    payload: {
      crashNumber: winMultiplier,
      gameRoundEndTimeInMs: Date.now(),
    },
  });

  const playResult: Play = {
    gameRoundUuid,
    playId: play.playId,
    userId,
    userNickname,
    playAmountInCents,
    winAmountInCents,
    winMultiplier: winMultiplier.toString(),
    coinType,
  };

  return playResult;
};
