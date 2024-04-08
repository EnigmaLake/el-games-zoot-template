import { Flex } from "@chakra-ui/react";
import { Text } from "../../../../design-system";
import { SCOREBOARD_HEADER_HEIGHT } from "../constants";

export const ScoreboardHeader = () => {
  return (
    <Flex
      direction="column"
      px={6}
      pt={4}
      pb={2}
      height={SCOREBOARD_HEADER_HEIGHT}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flex={0.6} alignItems="center" justifyContent="flex-start">
          <Text color="secondary" variant="small">
            Player
          </Text>
        </Flex>

        <Flex flex={0.6} alignItems="center" justifyContent="center">
          <Text color="secondary" variant="small">
            Multiplier
          </Text>
        </Flex>

        <Flex flex={0.6} alignItems="center" justifyContent="center">
          <Text color="secondary" variant="small">
            Payout
          </Text>
        </Flex>

        <Flex flex={0.6} alignItems="center" justifyContent="flex-end">
          <Text color="secondary" variant="small">
            Amount
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
