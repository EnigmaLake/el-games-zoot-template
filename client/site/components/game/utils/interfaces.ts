export interface IPlayAmountHookState {
  playAmount: number;
  setPlayAmount: (amount: number) => void;
  resetPlayAmount: () => void;
  lastPlayAmount: number;
  currency: Currency;
  setLastPlayAmount: (amount: number) => void;
}

export interface ICurrencyHookState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
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
