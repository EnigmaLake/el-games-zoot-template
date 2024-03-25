import axios, { AxiosRequestConfig } from "axios";
import { config } from "../config";
import { CoinType, GameRound, Play, RgsService } from "./types";

/**
 * Creates an RGS service used to communicate with the Enigma Lake RGS API
 */
export const createRgsService = (): RgsService => {
  /**
   * Initialize a game round
   */
  const initiateGameRound = async (): Promise<GameRound> => {
    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/initiate-game-round`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
      },
    };

    const response = await axios.request(requestConfig);

    return response.data.gameRound;
  };

  /**
   * Start an already initialised game round
   * @param gameRoundUuid
   */
  const startGameRound = async ({
    gameRoundUuid,
  }: {
    gameRoundUuid: string | undefined;
  }): Promise<{ startTimestamp: number }> => {
    if (!gameRoundUuid) throw new Error("gameRoundUuid is required");

    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/start-game-round`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
      },
      data: {
        gameRoundUuid,
      },
    };

    const response = await axios.request(requestConfig);

    return { startTimestamp: response.data.startTimestamp };
  };

  /**
   * Complete an in-progress game round
   * @param gameRoundUuid
   * @param crashNumber
   * @param gameRoundEndTimeInMs
   */
  const completeGameRound = async ({
    gameRoundUuid,
    crashNumber,
    gameRoundEndTimeInMs,
  }: {
    gameRoundUuid: string | undefined;
    crashNumber: number;
    gameRoundEndTimeInMs: number;
  }) => {
    if (!gameRoundUuid) throw new Error("gameRoundUuid is required");

    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/complete-game-round`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
      },
      data: {
        gameRoundUuid,
        crashNumber,
        gameRoundEndTimeInMs,
      },
    };

    await axios.request(requestConfig);
  };

  /**
   * Cancel an in-progress game round
   * @param gameRoundUuid
   */
  const cancelGameRound = async ({
    gameRoundUuid,
  }: {
    gameRoundUuid: string | undefined;
  }) => {
    if (!gameRoundUuid) throw new Error("gameRoundUuid is required");

    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/cancel-game-round`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
      },
      data: {
        gameRoundUuid,
      },
    };

    await axios.request(requestConfig);
  };

  /**
   * Registers an user play
   * @param userId
   * @param userNickname
   * @param playAmountInCents
   * @param gameRoundUuid
   * @param coinType
   * @param accessToken
   */
  const registerUserPlay = async ({
    userId,
    userNickname,
    playAmountInCents,
    gameRoundUuid,
    coinType,
    accessToken,
  }: {
    userId: number;
    userNickname: string;
    playAmountInCents: number;
    gameRoundUuid: string | undefined;
    coinType: CoinType;
    accessToken: string;
  }): Promise<Play> => {
    if (!gameRoundUuid) throw new Error("gameRoundUuid is required");

    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/register-user-play`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
        "User-Authorization": `Bearer ${accessToken}`,
      },
      data: {
        userId,
        userNickname,
        playAmountInCents,
        gameRoundUuid,
        coinType,
      },
    };

    const response = await axios.request(requestConfig);

    return {
      gameRoundUuid: response.data.gameRoundUuid,
      playId: response.data.playId,
      userId: response.data.userId,
      userNickname: response.data.userNickname,
      playAmountInCents: response.data.playAmountInCents,
      winAmountInCents: response.data.winAmountInCents,
      winMultiplier: response.data.winMultiplier,
      coinType: response.data.coinType,
    };
  };

  /**
   * Deregisters a user play
   * @param userId
   * @param userNickname
   * @param gameRoundUuid
   * @param accessToken
   */
  const deregisterUserPlay = async ({
    userId,
    userNickname,
    gameRoundUuid,
    accessToken,
  }: {
    userId: number;
    userNickname: string;
    gameRoundUuid: string | undefined;
    accessToken: string;
  }) => {
    if (!gameRoundUuid) throw new Error("gameRoundUuid is required");

    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/deregister-user-play`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
        "User-Authorization": `Bearer ${accessToken}`,
      },
      data: {
        userId,
        userNickname,
        gameRoundUuid,
      },
    };

    await axios.request(requestConfig);
  };

  /**
   * Register a user play win
   * @param userId
   * @param userNickname
   * @param gameRoundUuid
   * @param winAmountInCents
   * @param winMultiplier
   * @param playWinTimestamp
   * @param gameRoundCurrentProgressInMs
   */
  const registerPlayWin = async ({
    userId,
    userNickname,
    gameRoundUuid,
    winAmountInCents,
    winMultiplier,
    playWinTimestamp,
    gameRoundCurrentProgressInMs,
  }: {
    userId: number;
    userNickname: string;
    gameRoundUuid: string | undefined;
    winAmountInCents: number;
    winMultiplier: string;
    playWinTimestamp: number;
    gameRoundCurrentProgressInMs: number;
  }): Promise<Play> => {
    if (!gameRoundUuid) throw new Error("gameRoundUuid is required");

    const requestConfig: AxiosRequestConfig = {
      url: `${config.rgsAPIHost}/${config.rgsGameId}/register-play-win`,
      method: "POST",
      headers: {
        "Server-Authorization": `Bearer ${config.rgsBearerToken}`,
      },
      data: {
        userId,
        userNickname,
        gameRoundUuid,
        winAmountInCents,
        winMultiplier,
        playWinTimestamp,
        gameRoundCurrentProgressInMs,
      },
    };

    const response = await axios.request(requestConfig);

    return {
      gameRoundUuid: response.data.gameRoundUuid,
      playId: response.data.playId,
      userId: response.data.userId,
      userNickname: response.data.userNickname,
      playAmountInCents: response.data.playAmountInCents,
      winAmountInCents: response.data.winAmountInCents,
      winMultiplier: response.data.winMultiplier,
      coinType: response.data.coinType,
    };
  };

  return {
    initiateGameRound,
    startGameRound,
    completeGameRound,
    cancelGameRound,

    registerUserPlay,
    deregisterUserPlay,
    registerPlayWin,
  };
};
