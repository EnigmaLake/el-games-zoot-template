import { atom } from "recoil";

export const usePlayAtom = atom<number>({
  key: "playAmount",
  default: 0,
});

export const useLastPlayAtom = atom<number>({
  key: "lastPlayAmount",
  default: 0,
});
