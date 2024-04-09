import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { GreenButton, Text } from "../../../../design-system";

import { GameActions } from "./GameActions";

import { PlayAmountMultiplier } from "./PlayAmountMultiplier";
import { PlayAmountOptions } from "./PlayAmountOptions";

interface GameControlsProps {
  onClick: () => void;
  disableControllers: boolean;
}

const PLAY_CONTROLLER_HEIGHT = 225;

export const GameControlsContainer = ({
  onClick,
  disableControllers,
}: GameControlsProps) => {
  const isMobile = useBreakpointValue({
    lg: false,
    xs: true,
    sm: true,
    base: false,
    "2sm": true,
  });

  if (isMobile) {
    return (
      <Flex
        w="full"
        h={PLAY_CONTROLLER_HEIGHT}
        direction="column"
        gap={{ xs: 2, base: 4 }}
        justifyContent="center"
      >
        <Flex alignItems="center" justifyContent="center">
          <GreenButton
            width="fit-content"
            borderRadius="xxl"
            onClick={onClick}
            disabled={disableControllers}
          >
            <Text variant="base-callout"> Play now </Text>
          </GreenButton>
        </Flex>

        <Flex
          alignItems="center"
          w="full"
          justifyContent="center"
          gap={{ xs: 1, base: 2 }}
        >
          <GameActions disabled={disableControllers} />
          <PlayAmountMultiplier disabled={disableControllers} />
        </Flex>
        <PlayAmountOptions disabled={disableControllers} />
      </Flex>
    );
  }

  return (
    <Flex
      w="full"
      h={PLAY_CONTROLLER_HEIGHT}
      direction="column"
      gap={{ xs: 2, base: 4 }}
      justifyContent="center"
    >
      <PlayAmountOptions disabled={disableControllers} />
      <Flex alignItems="center" justifyContent="center">
        <GreenButton
          width="fit-content"
          borderRadius="xxl"
          onClick={onClick}
          disabled={disableControllers}
        >
          <Text variant="base-callout">Play now</Text>
        </GreenButton>
      </Flex>
      <Flex
        alignItems="center"
        w="full"
        justifyContent="center"
        gap={{ xs: 1, base: 2 }}
      >
        <GameActions disabled={disableControllers} />
        <PlayAmountMultiplier disabled={disableControllers} />
      </Flex>
    </Flex>
  );
};
