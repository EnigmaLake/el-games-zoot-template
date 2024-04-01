export interface IPlayAmountHookState {
  playAmount: number;
  setPlayAmount: (amount: number) => void;
  resetPlayAmount: () => void;
  lastPlayAmount: number;
  currency: string;
  setLastPlayAmount: (amount: number) => void;
}

export interface ICurrencyHookState {
  currency: string;
  setCurrency: (currency: string) => void;
  defaultPlayValues: number[];
}

export enum Currency {
  SWEEPS = "sweeps",
  GOLD = "gold",
}

export enum CoinType {
  "sweeps" = 0,
  "gold" = 1,
}
