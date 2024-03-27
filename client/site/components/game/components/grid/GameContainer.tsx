import { RefObject } from "react";
import { Flex } from "@chakra-ui/react";

import { GameHeader } from "./GameHeader";
import { GameScene } from "./GameScene";

interface GameContainerProps {
  containerRef: RefObject<HTMLDivElement> | null;
}

export const GameContainer = (props: GameContainerProps) => {
  return (
    <Flex
      ref={props.containerRef}
      bg="background-level-2"
      borderRadius="lg"
      flexDir="column"
    >
      <GameHeader />
      <GameScene />
    </Flex>
  );
};
