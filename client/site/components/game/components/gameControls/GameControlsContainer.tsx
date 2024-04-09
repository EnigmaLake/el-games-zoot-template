import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { GreenButton, Text } from "../../../../design-system";

import { GameActions } from "./GameActions";

import { PlayAmountMultiplier } from "./PlayAmountMultiplier";
import { PlayAmountOptions } from "./PlayAmountOptions";

interface GameControlsProps {
  onClick: () => void;
<<<<<<< Updated upstream
=======
  disableControllers: boolean;
>>>>>>> Stashed changes
}

const PLAY_CONTROLLER_HEIGHT = 225;

<<<<<<< Updated upstream
export const GameControlsContainer = ({ onClick }: GameControlsProps) => {
=======
export const GameControlsContainer = ({
  onClick,
  disableControllers,
}: GameControlsProps) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <GreenButton width="fit-content" borderRadius="xxl" onClick={onClick}>
=======
          <GreenButton
            width="fit-content"
            borderRadius="xxl"
            onClick={onClick}
            disabled={disableControllers}
          >
>>>>>>> Stashed changes
            <Text variant="base-callout"> Play now </Text>
          </GreenButton>
        </Flex>

        <Flex
          alignItems="center"
          w="full"
          justifyContent="center"
          gap={{ xs: 1, base: 2 }}
        >
<<<<<<< Updated upstream
          <GameActions />
          <PlayAmountMultiplier />
        </Flex>
        <PlayAmountOptions />
=======
          <GameActions disabled={disableControllers} />
          <PlayAmountMultiplier disabled={disableControllers} />
        </Flex>
        <PlayAmountOptions disabled={disableControllers} />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <PlayAmountOptions />
      <Flex alignItems="center" justifyContent="center">
        <GreenButton width="fit-content" borderRadius="xxl" onClick={onClick}>
          <Text variant="base-callout"> Play now </Text>
=======
      <PlayAmountOptions disabled={disableControllers} />
      <Flex alignItems="center" justifyContent="center">
        <GreenButton
          width="fit-content"
          borderRadius="xxl"
          onClick={onClick}
          disabled={disableControllers}
        >
          <Text variant="base-callout">Play now</Text>
>>>>>>> Stashed changes
        </GreenButton>
      </Flex>
      <Flex
        alignItems="center"
        w="full"
        justifyContent="center"
        gap={{ xs: 1, base: 2 }}
      >
<<<<<<< Updated upstream
        <GameActions />
        <PlayAmountMultiplier />
=======
        <GameActions disabled={disableControllers} />
        <PlayAmountMultiplier disabled={disableControllers} />
>>>>>>> Stashed changes
      </Flex>
    </Flex>
  );
};
