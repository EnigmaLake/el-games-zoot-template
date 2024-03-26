import { useEffect, useRef, useState } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { GameContainer } from "./GameContainer";
import { useGameExpander } from "../../hooks/useGameExpander";
import { Scoreboard } from "../../../features/scoreboard/components/Scoreboard";

export const GameGrid = () => {
  const [gameContainerHeight, setGameContainerHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const { isGameExpanded } = useGameExpander();

  useEffect(() => {
    setGameContainerHeight(elementRef.current?.offsetHeight ?? 0);
  }, [isGameExpanded]);

  const isMobile = useBreakpointValue({
    lg: false,
    xs: true,
    sm: true,
    base: false,
    "2sm": true,
  });

  if (isMobile) {
    return (
      <Flex w="full" h="full" direction="column" overflow="auto">
        <GameContainer containerRef={elementRef} />
        <Flex w="full" h={gameContainerHeight}>
          <Scoreboard />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex w="full" h="full" gap={4} direction="column">
      <Flex
        w="full"
        h="fit-content"
        gap={4}
        justifyContent="center"
        direction="row"
      >
        <Flex w="full" gap={4} h="100%" direction="row">
          {!isGameExpanded && (
            <Flex w="25%" h={gameContainerHeight}>
              <Scoreboard />
            </Flex>
          )}
          <Flex
            w={isGameExpanded ? "100%" : "75%"}
            direction="column"
            h="fit-content"
          >
            <GameContainer containerRef={elementRef} />
          </Flex>
        </Flex>
      </Flex>
      {isGameExpanded && (
        <Flex w="full" pb={6} minH="200px">
          <Scoreboard />
        </Flex>
      )}
    </Flex>
  );
};
