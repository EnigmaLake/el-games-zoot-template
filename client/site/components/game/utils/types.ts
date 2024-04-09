export enum CoinType {
  "sweeps" = 0,
  "gold",
}

export interface PlayResult {
  gameRoundUuid: string;
  userId: number;
  userNickname: string;
  playAmountInCents: number;
  winAmountInCents: number;
  winMultiplier: number;
  coinType: CoinType;
}
