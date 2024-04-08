import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { GreenButton, Text } from "../../../../design-system";

import { GameActions } from "./controls/GameActions";

import { PlayAmountMultiplier } from "./controls/PlayAmountMultiplier";
import { PlayAmountOptions } from "./controls/PlayAmountOptions";
import { PLAY_CONTROLLER_HEIGHT } from "./constants";

interface GameControlsProps {
  onClick: () => void;
}

export const GameControlsContainer = ({ onClick }: GameControlsProps) => {
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
          <GreenButton width="fit-content" borderRadius="xxl" onClick={onClick}>
            <Text variant="base-callout"> Play now </Text>
          </GreenButton>
        </Flex>

        <Flex
          alignItems="center"
          w="full"
          justifyContent="center"
          gap={{ xs: 1, base: 2 }}
        >
          <GameActions />
          <PlayAmountMultiplier />
        </Flex>
        <PlayAmountOptions />
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
      <PlayAmountOptions />
      <Flex alignItems="center" justifyContent="center">
        <GreenButton width="fit-content" borderRadius="xxl" onClick={onClick}>
          <Text variant="base-callout"> Play now </Text>
        </GreenButton>
      </Flex>
      <Flex
        alignItems="center"
        w="full"
        justifyContent="center"
        gap={{ xs: 1, base: 2 }}
      >
        <GameActions />
        <PlayAmountMultiplier />
      </Flex>
    </Flex>
  );
};
