import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { GameContainer } from "./GameContainer";

import { useGameExpander } from "../../hooks/useGameExpander";
import { Scoreboard } from "../../../features/scoreboard/components/Scoreboard";

export const GameGrid = () => {
  const { isGameExpanded } = useGameExpander();

  const isMobile = useBreakpointValue({
    lg: false,
    xs: true,
    sm: true,
    base: false,
    "2sm": true,
  });

  if (isMobile) {
    return (
      <Flex w="full" h="full" direction="column" overflow="auto" gap={4}>
        <Flex w="full" transition="width 0.2s" h="fit-content">
          <GameContainer />
        </Flex>
        <Flex w="full" h="full">
          <Scoreboard />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex w="full" h="full" gap={4} direction="row" justifyItems="center">
      <Flex
        width={isGameExpanded ? "0%" : "25%"}
        transition="width 0.2s"
        h="full"
      >
        <Scoreboard />
      </Flex>

      <Flex
        width={isGameExpanded ? "100%" : "75%"}
        transition="width 0.2s"
        h="full"
      >
        <GameContainer />
      </Flex>
    </Flex>
  );
};
