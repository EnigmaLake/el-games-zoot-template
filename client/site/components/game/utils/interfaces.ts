import { DebouncedState } from "use-debounce";

export interface IBetAmountHookState {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  resetBetAmount: () => void;
  lastBetAmount: number;
  currency: string;
  setLastBetAmount: (amount: number) => void;
}

export interface ICurrencyHookState {
  currency: string;
  setCurrency: (currency: string) => void;
  defaultBetValues: number[];
}

export interface IBetControllerHookState {
  handlePlaceBet: DebouncedState<() => Promise<void>>;
}
