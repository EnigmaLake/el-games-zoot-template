import { Flex } from "@chakra-ui/react";

import { GameHeader } from "./GameHeader";
import { GameScene } from "./GameScene";

export const GameContainer = () => {
  return (
    <Flex
      bg="background-level-2"
      borderRadius="lg"
      flexDir="column"
      w="full"
      h="full"
    >
      <GameHeader />
      <GameScene />
    </Flex>
  );
};
