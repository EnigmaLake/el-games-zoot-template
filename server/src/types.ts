export type Play = {
  gameRoundUuid: string;
  playId: string;
  userId: number;
  userNickname: string;
  pictureUrl?: string;
  playAmountInCents: number;
  winAmountInCents: number;
  winMultiplier: string;
  coinType: CoinType;
  playPayload?: Record<string, unknown>;
};

export enum CoinType {
  SWEEPS,
  GOLD,
}

export enum OutgoingSocketEvents {
  BET_REGISTER_SUCCEEDED = "BET_REGISTER_SUCCEEDED",
  BET_REGISTER_FAILED = "BET_REGISTER_FAILED",

  USER_BET_LIST_SUCCEEDED = "USER_BET_LIST_SUCCEEDED",
  USER_BET_LIST_FAILED = "USER_BET_LIST_FAILED",
}

export enum IncomingSocketEvents {
  BET_REGISTER = "BET_REGISTER",
  BET_LIST = "BET_LIST",
}

export interface IncomingSocketEventPayload extends Record<string, unknown> {
  gameRoundUuid: string;
  userId: number;
  userNickname: string;
  pictureUrl?: string;
}

export type LocalCacheScoreboard = {
  gameRoundUuid?: string;
  betId?: number;
  userId?: number;
  betAmount?: number;
  pictureUrl?: string;
  playAmount?: number;
  winAmount?: number;
  winMultiplier?: string;
  coinType?: CoinType;
};

export type EmitPayload = {
  gameRoundUuid: string;
  timestamp: number;
};

export const GUEST_USER_ID = -1;
