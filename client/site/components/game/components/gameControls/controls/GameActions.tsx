import { Flex } from "@chakra-ui/react";

import { CurrencySelector } from "./CurrencySelector";
import { usePlayAmount } from "../../../hooks/usePlayAmount";
import { Reload, SecondaryButton } from "../../../../../design-system";
import { buttonWidth } from "./constants";
import { useCurrency } from "../../../hooks/useCurrency";

export const GameActions = () => {
  const { currency, setCurrency } = useCurrency();
  const { lastPlayAmount, setPlayAmount } = usePlayAmount();

  return (
    <Flex gap={{ xs: 1, base: 2 }} alignItems="center">
      <CurrencySelector setCurrency={setCurrency} currency={currency} />
      <SecondaryButton
        width={buttonWidth}
        onClick={() => setPlayAmount(lastPlayAmount)}
        borderRadius="xxl"
      >
        <Reload />
      </SecondaryButton>
    </Flex>
  );
};
