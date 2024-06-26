import { Currency } from "@enigma-lake/zoot-platform-sdk";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const useCurrencyAtom = atom<Currency>({
  key: "currency",
  default: Currency.SWEEPS,
  effects: [persistAtom],
});

export function useSetCurrencyState() {
  return useRecoilState(useCurrencyAtom);
}
