import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";

import { useSetPlayLimitsState } from "../../../../recoil/state/playLimits";
import { AmountInput } from "./part-components/AmountInput";
import { CurrencySelector } from "./part-components/CurrencySelector";
import { PlayAmountMultiplier } from "./part-components/PlayAmountMultiplier";
import { PlayButton } from "./part-components/PlayButton";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";

interface GameControlsProps {
  onClick: () => void;
  disableControllers: boolean;
}

const PLAY_CONTROLLER_HEIGHT = 155;

export const GameControlsContainer = ({
  onClick,
  disableControllers,
}: GameControlsProps) => {
  const [playLimits] = useSetPlayLimitsState();
  const [currency, setCurrency] = useRecoilState(useCurrencyAtom);

  return (
    <Flex
      h={PLAY_CONTROLLER_HEIGHT}
      w="full"
      direction="column"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      {playLimits && (
        <Flex
          justifyContent="center"
          gap={3}
          flexDir="column"
          alignItems="center"
        >
          <Flex alignItems="center" justifyContent="center">
            <CurrencySelector
              disabled={disableControllers}
              setCurrency={setCurrency}
              currency={currency}
            />
            <AmountInput
              disableControllers={disableControllers}
              limits={playLimits[currency].limits}
            />
            <PlayAmountMultiplier
              disabled={disableControllers}
              limits={playLimits[currency].limits}
            />
          </Flex>
          <PlayButton
            onClick={onClick}
            disableControllers={disableControllers}
            currency={currency}
          />
        </Flex>
      )}
    </Flex>
  );
};
