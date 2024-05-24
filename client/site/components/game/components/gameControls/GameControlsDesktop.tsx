import { useRecoilState } from "recoil";
import { Flex } from "@chakra-ui/react";

import { PlayButton } from "./part-components/PlayButton";
import { AmountInput } from "./part-components/AmountInput";
import { ReloadButton } from "./part-components/ReloadButton";
import { CurrencySelector } from "./part-components/CurrencySelector";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { PlayAmountMultiplier } from "./part-components/PlayAmountMultiplier";
import { DefaultValuesButtons } from "./part-components/DefaultValuesButtons";
import { PlayLimits } from "@enigma-lake/zoot-platform-sdk";

interface GameControlsDesktopProps {
  onClick: () => void;
  disableControllers: boolean;
  playLimits: PlayLimits;
}

export const GameControlsDesktop = ({
  onClick,
  disableControllers,
  playLimits,
}: GameControlsDesktopProps) => {
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  const { defaultValues, limits } = playLimits[currency];

  const half_length = Math.ceil(defaultValues.length / 2);

  const leftSide = defaultValues.slice(0, half_length);
  const rightSide = defaultValues.slice(half_length, defaultValues?.length);

  return (
    <Flex
      justifyContent="center"
      gap={4}
      flexDir="column"
      alignItems="center"
      w="70%"
    >
      <Flex gap={2}>
        <Flex gap={2}>
          <DefaultValuesButtons
            disableControllers={disableControllers}
            defaultPlayValues={leftSide}
          />
        </Flex>
        <AmountInput disableControllers={disableControllers} limits={limits} />
        <Flex gap={2}>
          <DefaultValuesButtons
            defaultPlayValues={rightSide}
            disableControllers={disableControllers}
          />
        </Flex>
      </Flex>
      <Flex gap={2} justifyContent="space-between" w="100%">
        <Flex gap={2}>
          <CurrencySelector
            disabled={disableControllers}
            setCurrency={setCurrency}
            currency={currency}
          />
          <ReloadButton disableControllers={disableControllers} />
        </Flex>
        <PlayButton onClick={onClick} disableControllers={disableControllers} />
        <PlayAmountMultiplier disabled={disableControllers} limits={limits} />
      </Flex>
    </Flex>
  );
};
