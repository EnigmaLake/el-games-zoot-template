import { Flex } from "@chakra-ui/react";

import { CurrencySelector } from "./CurrencySelector";
import { useBetAmount } from "../../../hooks/useBetAmount";
import { Reload, SecondaryButton } from "../../../../../design-system";
import { buttonWidth } from "../utils/constants";
import { useCurrency } from "../../../hooks/useCurrency";

export const GameActions = () => {
  const { currency, setCurrency } = useCurrency();
  const { lastBetAmount, setBetAmount } = useBetAmount();

  return (
    <Flex gap={{ xs: 1, base: 2 }} alignItems="center">
      <CurrencySelector setCurrency={setCurrency} currency={currency} />
      <SecondaryButton
        width={buttonWidth}
        onClick={() => setBetAmount(lastBetAmount)}
        borderRadius="xxl"
      >
        <Reload />
      </SecondaryButton>
    </Flex>
  );
};
