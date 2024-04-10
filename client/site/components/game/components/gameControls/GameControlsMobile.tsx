import { useRecoilState } from "recoil";
import { Box, Flex } from "@chakra-ui/react";

import { getDefaultPlayValues } from "./utils";
import { PlayButton } from "./part-components/PlayButton";
import { AmountInput } from "./part-components/AmountInput";
import { ReloadButton } from "./part-components/ReloadButton";
import { CurrencySelector } from "./part-components/CurrencySelector";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { PlayAmountMultiplier } from "./part-components/PlayAmountMultiplier";
import { DefaultValuesButtons } from "./part-components/DefaultValuesButtons";

interface GameControlsMobileProps {
  onClick: () => void;
  disableControllers: boolean;
}

export const GameControlsMobile = ({
  onClick,
  disableControllers,
}: GameControlsMobileProps) => {
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  const defaultPlayValues = getDefaultPlayValues(currency);

  return (
    <Flex justifyContent="center" gap={4} flexDir="column" alignItems="center">
      <Flex gap={2} justifyContent="space-between" w="100%">
        <DefaultValuesButtons
          disableControllers={disableControllers}
          defaultPlayValues={defaultPlayValues}
        />
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <ReloadButton disableControllers={disableControllers} />
        <AmountInput disableControllers={disableControllers} />
        <PlayAmountMultiplier disabled={disableControllers} />
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <CurrencySelector
          disabled={disableControllers}
          setCurrency={setCurrency}
          currency={currency}
        />
        <PlayButton onClick={onClick} disableControllers={disableControllers} />
        <Box />
      </Flex>
    </Flex>
  );
};
