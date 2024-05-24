import { Currency } from "@enigma-lake/zoot-platform-sdk";

import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";

import { useLastPlayAtom, usePlayAtom } from "../recoil/state/playAmount";
import { useCurrencyAtom } from "../recoil/state/walletCurrency";
import { useBalanceAtom } from "../recoil/state/balance";
import { useSetPlayLimitsState } from "../recoil/state/playLimits";

interface IPlayAmountHookState {
  playAmount: number;
  setPlayAmount: (amount: number) => void;
  setLastPlayAmount: () => void;
  availableBalance: number;
}

export const usePlayAmount = (): IPlayAmountHookState => {
  const [balance] = useRecoilState(useBalanceAtom);
  const [currency] = useRecoilState(useCurrencyAtom);
  const [playLimits] = useSetPlayLimitsState();

  const availableBalance =
    currency === Currency.SWEEPS ? balance.sweepsBalance : balance.goldBalance;

  const [playAmount, setPlayAmount] = useRecoilState(usePlayAtom);
  const [lastPlayAmount, setLastPlayAmount] = useRecoilState(useLastPlayAtom);

  const handleSetPlayAmount = (amount: number) => {
    if (amount <= availableBalance) {
      setPlayAmount(amount);
    }
  };

  useEffect(() => {
    if (playLimits) {
      setPlayAmount(playLimits[currency].limits.min);
      setLastPlayAmount(playLimits[currency].limits.min);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playLimits, currency]);

  const handleSetLastPlayAmount = () => {
    if (lastPlayAmount <= availableBalance) {
      setLastPlayAmount(lastPlayAmount);
    } else if (playLimits) {
      setLastPlayAmount(playLimits[currency].limits.min);
    }
  };

  useEffect(() => {
    resetPlayAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetPlayAmount = useCallback(() => {
    if (playLimits) {
      setPlayAmount(playLimits[currency].limits.min);
    }
  }, [currency, playLimits, setPlayAmount]);

  return {
    playAmount,
    availableBalance,
    setPlayAmount: handleSetPlayAmount,
    setLastPlayAmount: handleSetLastPlayAmount,
  };
};
