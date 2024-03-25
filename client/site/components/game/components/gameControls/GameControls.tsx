import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { GameActions } from "./controls/GameActions";
import { BetMultiplier } from "./controls/BetMultiplier";
import { BetValueOptions } from "./controls/BetValueOptions";
import { GreenButton, Text } from "../../../../design-system";

interface GameControlsProps {
  onClick: () => void;
}

export const GameControls = ({ onClick }: GameControlsProps) => {
  const isMobile = useBreakpointValue({
    lg: false,
    xs: true,
    sm: true,
    base: false,
    "2sm": true,
  });

  if (isMobile) {
    return (
      <Flex w="full" h="full" direction="column" gap={{ xs: 2, base: 4 }} p={4}>
        <Flex direction="column" gap={2}>
          <Flex alignItems="center" justifyContent="center">
            <GreenButton
              width="fit-content"
              borderRadius="xxl"
              onClick={onClick}
            >
              <Text variant="base-callout"> Play </Text>
            </GreenButton>
          </Flex>

          <Flex
            alignItems="center"
            w="full"
            justifyContent="center"
            gap={{ xs: 1, base: 2 }}
          >
            <GameActions />
            <BetMultiplier />
          </Flex>
          <BetValueOptions />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex w="full" h="full" direction="column" gap={{ xs: 2, base: 4 }} p={4}>
      <Flex direction="column" gap={2}>
        <BetValueOptions />
        <Flex alignItems="center" justifyContent="center">
          <GreenButton width="fit-content" borderRadius="xxl" onClick={onClick}>
            <Text variant="base-callout"> Play </Text>
          </GreenButton>
        </Flex>
        <Flex
          alignItems="center"
          w="full"
          justifyContent="center"
          gap={{ xs: 1, base: 2 }}
        >
          <GameActions />
          <BetMultiplier />
        </Flex>
      </Flex>
    </Flex>
  );
};
