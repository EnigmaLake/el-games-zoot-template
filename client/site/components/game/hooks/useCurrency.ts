import { useRecoilState } from "recoil";
import { ICurrencyHookState } from "../utils/interfaces";
import { useCurrencyAtom } from "../../../recoil/state/walletCurrency";
import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

export const useCurrency = (): ICurrencyHookState => {
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  return {
    currency,
    defaultPlayValues: {
      [Currency.GOLD]: [100, 1000, 10_000, 50_000],
      [Currency.SWEEPS]: [0.5, 1, 5, 10],
    }[currency as Currency],
    setCurrency: (curr) => {
      setCurrency(curr);
    },
  };
};
