/* eslint-disable react-hooks/exhaustive-deps */

import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";

import { IBetAmountHookState } from "../utils/interfaces";
import {
  DEFAULT_GOLD_BET_AMOUNT,
  DEFAULT_SWEEPS_BET_AMOUNT,
  useBetAtom,
  useLastBetAtom,
} from "../../../recoil/state/betAmount";
import { Currency } from "@enigma-lake/zoot-game-integration-sdk";
import { useBalance } from "./useBalance";
import { useCurrencyAtom } from "../../../recoil/state/walletCurrency";

export const useBetAmount = (): IBetAmountHookState => {
  const { balance } = useBalance();
  const [currency] = useRecoilState(useCurrencyAtom);

  const availableBalance =
    currency === Currency.SWEEPS ? balance.sweepsBalance : balance.goldBalance;

  const [betAmount, setBetAmount] = useRecoilState(useBetAtom);
  const [lastBetAmount, setLastBetAmount] = useRecoilState(useLastBetAtom);

  const handleSetBetAmount = (amount: number) => {
    if (amount <= availableBalance) {
      setBetAmount(amount);
    }
  };

  useEffect(() => {
    resetBetAmount();
  }, []);

  const resetBetAmount = useCallback(() => {
    setBetAmount(
      currency === Currency.SWEEPS
        ? DEFAULT_SWEEPS_BET_AMOUNT
        : DEFAULT_GOLD_BET_AMOUNT
    );
  }, [setBetAmount]);

  return {
    betAmount,
    currency,
    resetBetAmount,
    setBetAmount: handleSetBetAmount,
    lastBetAmount,
    setLastBetAmount,
  };
};
