import { atom, useRecoilState } from "recoil";

export const DEFAULT_GOLD_BET_AMOUNT = 10;
export const DEFAULT_SWEEPS_BET_AMOUNT = 1;

export const useBetAtom = atom<number>({
  key: "betAmount",
  default: 10,
});

export const useLastBetAtom = atom<number>({
  key: "lastBetAmount",
  default: 10,
});

export function useSetBetAmountState() {
  return useRecoilState(useBetAtom);
}
