import { Flex } from "@chakra-ui/react";

import { CurrencySelector } from "./CurrencySelector";

import { Reload, SecondaryButton } from "../../../../design-system";
import { buttonWidth } from "./utils";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { useRecoilState } from "recoil";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";

<<<<<<< Updated upstream
export const GameActions = () => {
=======
export const GameActions = ({ disabled }: { disabled: boolean }) => {
>>>>>>> Stashed changes
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);
  const { setLastPlayAmount } = usePlayAmount();

  return (
    <Flex gap={{ xs: 1, base: 2 }} alignItems="center">
<<<<<<< Updated upstream
      <CurrencySelector setCurrency={setCurrency} currency={currency} />
=======
      <CurrencySelector
        disabled={disabled}
        setCurrency={setCurrency}
        currency={currency}
      />
>>>>>>> Stashed changes
      <SecondaryButton
        width={buttonWidth}
        onClick={setLastPlayAmount}
        borderRadius="xxl"
      >
        <Reload />
      </SecondaryButton>
    </Flex>
  );
};
