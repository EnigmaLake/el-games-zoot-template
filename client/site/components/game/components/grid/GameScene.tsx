import { Flex } from "@chakra-ui/react";
import { GameControls } from "../gameControls/GameControls";
import { Text } from "../../../../design-system";

export const GameScene = () => {
  const onPlayClick = () => {
    null;
  };
  return (
    <Flex direction="column" w="full">
      <Flex
        w="full"
        h={{ base: "fit-content", lg: "32rem" }}
        bg="black850"
        px={{ lg: 10, sm: 0, xs: 0 }}
        alignItems="center"
        justifyItems="center"
      >
        <Text align="center" width="full">
          Here comes the game!
        </Text>
      </Flex>
      <GameControls onClick={onPlayClick} />
    </Flex>
  );
};
