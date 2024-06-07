import { useRecoilState } from "recoil";
import { Box, Flex } from "@chakra-ui/react";

import { PlayButton } from "./part-components/PlayButton";
import { AmountInput } from "./part-components/AmountInput";
import { ReloadButton } from "./part-components/ReloadButton";
import { CurrencySelector } from "./part-components/CurrencySelector";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { PlayAmountMultiplier } from "./part-components/PlayAmountMultiplier";
import { DefaultValuesButtons } from "./part-components/DefaultValuesButtons";
import { PlayLimits } from "@enigma-lake/zoot-platform-sdk";

interface GameControlsMobileProps {
  onClick: () => void;
  disableControllers: boolean;
  playLimits: PlayLimits;
}

export const GameControlsMobile = ({
  onClick,
  disableControllers,
  playLimits,
}: GameControlsMobileProps) => {
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);
  const { defaultValues, limits } = playLimits[currency];

  return (
    <Flex justifyContent="center" gap={2} flexDir="column" alignItems="center">
      <Flex gap={2} justifyContent="space-between" w="100%">
        <DefaultValuesButtons
          disableControllers={disableControllers}
          defaultPlayValues={defaultValues}
        />
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <ReloadButton disableControllers={disableControllers} />
        <AmountInput disableControllers={disableControllers} limits={limits} />
        <PlayAmountMultiplier disabled={disableControllers} limits={limits} />
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <CurrencySelector
          disabled={disableControllers}
          setCurrency={setCurrency}
          currency={currency}
        />
        <PlayButton
          onClick={onClick}
          disableControllers={disableControllers}
          currency={currency}
        />
        <Box />
      </Flex>
    </Flex>
  );
};
