import { atom, useRecoilState } from "recoil";

export const useTimePassedAtom = atom<number>({
  key: "timePassed",
  default: 0,
});

export function useSetTimePassedState() {
  return useRecoilState(useTimePassedAtom);
}
