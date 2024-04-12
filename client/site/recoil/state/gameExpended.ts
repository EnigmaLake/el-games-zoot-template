import { atom } from "recoil";

export const gameExpendedAtom = atom<{
  expanded: boolean;
  isMobileView: boolean;
}>({
  key: "isGameExpended",
  default: {
    expanded: false,
    isMobileView: false,
  },
});