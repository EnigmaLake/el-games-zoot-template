import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";

import { IPlayAmountHookState } from "../utils/interfaces";
import {
  DEFAULT_GOLD_BET_AMOUNT,
  DEFAULT_SWEEPS_BET_AMOUNT,
  useLastPlayAtom,
  usePlayAtom,
} from "../../../recoil/state/playAmount";
import { useBalance } from "./useBalance";
import { useCurrencyAtom } from "../../../recoil/state/walletCurrency";

export const usePlayAmount = (): IPlayAmountHookState => {
  const { balance } = useBalance();
  const [currency] = useRecoilState(useCurrencyAtom);

  const availableBalance =
    currency === Currency.SWEEPS ? balance.sweepsBalance : balance.goldBalance;

  const [playAmount, setPlayAmount] = useRecoilState(usePlayAtom);
  const [lastPlayAmount, setLastPlayAmount] = useRecoilState(useLastPlayAtom);

  const handleSetPlayAmount = (amount: number) => {
    if (amount <= availableBalance) {
      setPlayAmount(amount);
    }
  };

  const resetPlayAmount = useCallback(() => {
    setPlayAmount(
      currency === Currency.SWEEPS
        ? DEFAULT_SWEEPS_BET_AMOUNT
        : DEFAULT_GOLD_BET_AMOUNT
    );
  }, [currency, setPlayAmount]);

  useEffect(() => {
    resetPlayAmount();
  }, [resetPlayAmount]);

  return {
    playAmount,
    currency,
    resetPlayAmount,
    setPlayAmount: handleSetPlayAmount,
    lastPlayAmount,
    setLastPlayAmount,
  };
};
