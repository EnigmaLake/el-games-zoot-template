import { Flex } from "@chakra-ui/react";

import { ScoreboardRow } from "./ScoreboardRow";
import { ScoreboardHeader } from "./ScoreboardHeader";
import { useSetCurrentScoreboardState } from "../state/currentScoreboard";
import { SCOREBOARD_BODY_HEIGHT, SCOREBOARD_HEADER_HEIGHT } from "../constants";

export const Scoreboard = () => {
  const [currentScoreboard] = useSetCurrentScoreboardState();

  return (
    <Flex
      direction="column"
      w="full"
      h={SCOREBOARD_BODY_HEIGHT}
      borderRadius="lg"
      bg="background-level-2"
    >
      <ScoreboardHeader />
      <Flex
        direction="column"
        px={4}
        h={`calc(100% - ${SCOREBOARD_HEADER_HEIGHT / 2 + 10})`}
        w="full"
        gap={2}
      >
        {currentScoreboard.map((entry) => (
          <ScoreboardRow key={entry.gameRoundUuid} entry={entry} />
        ))}
      </Flex>
    </Flex>
  );
};
