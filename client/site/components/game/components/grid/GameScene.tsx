import { Flex } from "@chakra-ui/react";
import { Text } from "../../../../design-system";

import { GameControlsContainer } from "../gameControls/GameControlsContainer";

const GAME_SCENE_HEIGHT = "32rem";

export const GameScene = () => {
  const onPlayClick = () => {
    null;
  };

  return (
    <Flex direction="column" w="full">
      <Flex
        w="full"
        h={{
          xxs: "25rem",
          md: GAME_SCENE_HEIGHT,
          base: GAME_SCENE_HEIGHT,
          lg: GAME_SCENE_HEIGHT,
        }}
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
