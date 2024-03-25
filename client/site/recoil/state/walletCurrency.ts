import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Currency } from "../../components/game/Currency";

const { persistAtom } = recoilPersist();

export const useCurrencyAtom = atom<string>({
  key: "currency",
  default: Currency.SWEEPS,
  effects: [persistAtom],
});

export function useSetCurrencyState() {
  return useRecoilState(useCurrencyAtom);
}
