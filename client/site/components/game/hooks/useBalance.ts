/* eslint-disable react-hooks/exhaustive-deps */

import { SetterOrUpdater, useRecoilState } from "recoil";
import { useBalanceAtom } from "../../../recoil/state/balance";

export const useBalance = (): {
  balance: {
    sweepsBalance: number;
    goldBalance: number;
  };
  setBalance: SetterOrUpdater<{ sweepsBalance: 0; goldBalance: 0 }>;
} => {
  const [balance, setBalance] = useRecoilState(useBalanceAtom);

  return {
    balance,
    setBalance,
  };
};
