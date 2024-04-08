import { atom } from "recoil";

export const DEFAULT_GOLD_BET_AMOUNT = 10;
export const DEFAULT_SWEEPS_BET_AMOUNT = 1;

export const usePlayAtom = atom<number>({
  key: "playAmount",
  default: 10,
});

export const useLastPlayAtom = atom<number>({
  key: "lastPlayAmount",
  default: 10,
});
