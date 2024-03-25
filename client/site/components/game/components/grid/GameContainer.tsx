import { RefObject } from "react";
import { Flex } from "@chakra-ui/react";

import { Text } from "../../../../design-system";
import { GameHeader } from "./GameHeader";

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
      <Text>Here comes the game!</Text>
    </Flex>
  );
};
