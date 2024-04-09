import { Flex } from "@chakra-ui/react";

import { CurrencySelector } from "./CurrencySelector";

import { Reload, SecondaryButton } from "../../../../design-system";
import { buttonWidth } from "./utils";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { useRecoilState } from "recoil";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";

export const GameActions = ({ disabled }: { disabled: boolean }) => {
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);
  const { setLastPlayAmount } = usePlayAmount();

  return (
    <Flex gap={{ xs: 1, base: 2 }} alignItems="center">
      <CurrencySelector
        disabled={disabled}
        setCurrency={setCurrency}
        currency={currency}
      />
      <SecondaryButton
        width={buttonWidth}
        onClick={setLastPlayAmount}
        borderRadius="xxl"
        disabled={disabled}
      >
        <Reload />
      </SecondaryButton>
    </Flex>
  );
};
