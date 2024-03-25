import { Flex } from "@chakra-ui/react";

import { ScoreboardRow } from "./ScoreboardRow";
import { ScoreboardHeader } from "./ScoreboardHeader";
import { useSetCurrentScoreboardState } from "../state/currentScoreboard";

export const Scoreboard = () => {
  const [currentScoreboard] = useSetCurrentScoreboardState();

  return (
    <Flex direction="column" w="full" h="full">
      <Flex
        direction="column"
        w="full"
        h="full"
        borderRadius="lg"
        bg="background-level-2"
        overflow="auto"
        p={1}
      >
        <ScoreboardHeader />
        <Flex overflow="auto" direction="column" px={4}>
          <Flex overflow="scroll" maxHeight="500px" direction="column" gap={2}>
            {currentScoreboard.map((entry) => (
              <ScoreboardRow key={entry.playId} entry={entry} />
            ))}
          </Flex>
        </Flex>

        {/*<Flex py={4} w="full" justifyContent="center">
          <TertiaryButton borderRadius="xxl">
            <Text color="secondary" variant="small-callout">
              Show more
            </Text>
          </TertiaryButton>
        </Flex>*/}
      </Flex>
    </Flex>
  );
};
