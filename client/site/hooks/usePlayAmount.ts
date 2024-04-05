import { Currency } from "@enigma-lake/zoot-game-integration-sdk";

import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";

import { IPlayAmountHookState } from "../components/game/utils/interfaces";
import {
  DEFAULT_GOLD_BET_AMOUNT,
  DEFAULT_SWEEPS_BET_AMOUNT,
  useLastPlayAtom,
  usePlayAtom,
} from "../recoil/state/playAmount";
import { useCurrencyAtom } from "../recoil/state/walletCurrency";
import { useBalanceAtom } from "../recoil/state/balance";

export const usePlayAmount = (): IPlayAmountHookState => {
  const [balance] = useRecoilState(useBalanceAtom);
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

  const handleSetLastPlayAmount = () => {
    if (lastPlayAmount <= availableBalance) {
      setLastPlayAmount(lastPlayAmount);
    } else {
      setLastPlayAmount(availableBalance);
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
    setPlayAmount: handleSetPlayAmount,
    setLastPlayAmount: handleSetLastPlayAmount,
  };
};
