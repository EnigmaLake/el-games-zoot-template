import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { GameContainer } from "./GameContainer";

import { Scoreboard } from "../../../features/scoreboard/components/Scoreboard";
import { Socket } from "socket.io-client";
import { gameExpendedAtom } from "../../../../recoil/state/gameExpended";
import { useRecoilValue } from "recoil";

export const GameGrid = (_props: { socket?: Socket }) => {
  const isGameExpanded = useRecoilValue(gameExpendedAtom);

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
        <Flex w="full" h="fit-content">
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
        transition="width 0.15s"
        h="full"
      >
        <Scoreboard />
      </Flex>

      <Flex
        width={isGameExpanded ? "100%" : "75%"}
        transition="width 0.15s"
        h="full"
      >
        <GameContainer />
      </Flex>
    </Flex>
  );
};
