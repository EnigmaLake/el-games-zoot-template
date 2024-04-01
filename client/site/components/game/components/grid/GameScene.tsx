import { Flex } from "@chakra-ui/react";
import { Text } from "../../../../design-system";

import { GameControlsContainer } from "../gameControls/GameControlsContainer";

export const GameScene = () => {
  const onPlayClick = () => {
    null;
  };

  return (
    <Flex direction="column" w="full">
      <Flex
        w="full"
        h="32rem"
        bg="black850"
        px={{ lg: 10, sm: 0, xs: 0 }}
        alignItems="center"
        justifyItems="center"
      >
        <Text align="center" width="full">
          Here comes the game!
        </Text>
      </Flex>
      <GameControlsContainer onClick={onPlayClick} />
    </Flex>
  );
};
