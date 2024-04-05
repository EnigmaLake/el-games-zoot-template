export interface IPlayAmountHookState {
  playAmount: number;
  setPlayAmount: (amount: number) => void;
  setLastPlayAmount: () => void;
}

export enum Currency {
  SWEEPS = "sweeps",
  GOLD = "gold",
}

export enum CoinType {
  "sweeps" = 0,
  "gold",
}
