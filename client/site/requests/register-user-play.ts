import axios, { AxiosRequestConfig } from "axios";

import { CoinType, PlayResult } from "../components/game/utils/types";

export const registerPlay = async ({
  playAmountInCents,
  userId,
  userNickname,
  coinType,
  userAccessToken,
}: {
  playAmountInCents?: number;
  userId?: number;
  userNickname?: string;
  coinType: CoinType;
  userAccessToken?: string;
}) => {
  const requestConfig: AxiosRequestConfig = {
    url: `${process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SERVER_URL}/register-user-play`,
    method: "POST",
    data: {
      playAmountInCents,
      userId,
      userNickname,
      coinType,
      userAccessToken,
    },
  };

  const response: {
    data: { success: boolean; message: string; play: PlayResult };
  } = await axios.request(requestConfig);
  const { data } = response;

  return data;
};
