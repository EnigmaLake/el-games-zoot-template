import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const useBalanceAtom = atom<{
  sweepsBalance: 0;
  goldBalance: 0;
}>({
  key: "balance",
  default: {
    sweepsBalance: 0,
    goldBalance: 0,
  },
  effects: [persistAtom],
});

export function useSetCurrencyState() {
  return useRecoilState(useBalanceAtom);
}
