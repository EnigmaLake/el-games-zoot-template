import { atom, useRecoilState } from "recoil";

export const useTimeLeftAtom = atom<number>({
  key: "timeLeft",
  default: 0,
});

export function useSetTimeLeftState() {
  return useRecoilState(useTimeLeftAtom);
}
