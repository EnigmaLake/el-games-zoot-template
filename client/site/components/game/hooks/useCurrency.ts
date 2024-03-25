import { useRecoilState } from "recoil";
import { ICurrencyHookState } from "../utils/interfaces";
import { useCurrencyAtom } from "../../../recoil/state/walletCurrency";
import {
  Currency,
  sendSetUserCurrencyEvent,
} from "@enigma-lake/zoot-game-integration-sdk";

export const useCurrency = (): ICurrencyHookState => {
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  sendSetUserCurrencyEvent({
    currency: currency === Currency.SWEEPS ? Currency.SWEEPS : Currency.GOLD,
  });

  return {
    currency,
    defaultBetValues: {
      [Currency.GOLD]: [100, 1000, 10000, 50000],
      [Currency.SWEEPS]: [0.5, 1, 5, 10],
    }[currency as Currency],
    setCurrency: (curr) => {
      setCurrency(curr);
    },
  };
};
