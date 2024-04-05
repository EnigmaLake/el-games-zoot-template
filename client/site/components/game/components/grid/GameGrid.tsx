import { Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

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
    <Flex w="full" h="full" gap={4} direction="column">
      <Grid templateColumns="repeat(3, 12fr)" gap={4}>
        {!isGameExpanded && (
          <GridItem colSpan={1} h="fit-content">
            <Scoreboard />
          </GridItem>
        )}
        <GridItem colSpan={isGameExpanded ? 3 : 2} h="fit-content">
          <GameContainer />
        </GridItem>
      </Grid>

      {isGameExpanded && (
        <Flex w="full" pb={6} minH="200px">
          <Scoreboard />
        </Flex>
      )}
    </Flex>
  );
};
