import { PlayLimits } from "@enigma-lake/zoot-platform-sdk";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const usePlayLimitsAtom = atom<PlayLimits | undefined>({
  key: "playLimits",
  default: undefined,
  effects: [persistAtom],
});

export function useSetPlayLimitsState() {
  return useRecoilState(usePlayLimitsAtom);
}
