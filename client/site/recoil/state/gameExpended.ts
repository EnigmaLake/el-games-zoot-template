import { atom } from "recoil";

export const gameExpendedAtom = atom<boolean>({
  key: "isGameExpended",
  default: false,
});
