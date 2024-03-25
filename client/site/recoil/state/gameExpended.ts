import { atom, useRecoilState } from "recoil";

export const gameExpended = atom<boolean>({
  key: "isGameExpended",
  default: false,
});

export function useGameExpendedState() {
  return useRecoilState(gameExpended);
}
