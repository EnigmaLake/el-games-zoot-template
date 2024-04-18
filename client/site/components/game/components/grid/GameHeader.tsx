import { toggleGameViewEvent } from "@enigma-lake/zoot-platform-sdk";
import { useRecoilState } from "recoil";
import { Flex } from "@chakra-ui/react";

import {
  Compress,
  Frame,
  SecondaryButton,
  Text,
} from "../../../../design-system";
import { DateAndTime } from "./DateAndTime";
import { gameExpendedAtom } from "../../../../recoil/state/gameExpended";

export const GameHeader = () => {
  const [isGameExpanded] = useRecoilState(gameExpendedAtom);

  return (
    <Flex
      w="full"
      p={4}
      direction="row"
      borderTopRadius="lg"
      justifyContent="space-between"
    >
      <DateAndTime />
      <Flex gap={2}>
        {/* <SecondaryButton borderRadius="xxl">
          <Flex alignItems="center" gap={1}>
            <Shield color="secondary" />
            {!isMobile && (
              <Text variant="small" color="secondary">
                Game Fairness
              </Text>
            )}
          </Flex>
        </SecondaryButton> */}
        <SecondaryButton
          borderRadius="xxl"
          onClick={() =>
            toggleGameViewEvent({
              ...isGameExpanded,
              expanded: !isGameExpanded.expanded,
            })
          }
        >
          <Flex alignItems="center" gap={1}>
            {isGameExpanded.expanded ? <Compress /> : <Frame />}
            <Text variant="small" color="secondary">
              {isGameExpanded.expanded ? "Compress" : "Expand"}
            </Text>
          </Flex>
        </SecondaryButton>
        {/* <SecondaryButton borderRadius="xxl">
          <Flex alignItems="center" gap={1}>
            <Sound />
            {!isMobile && (
              <Text variant="small" color="secondary">
                Mute
              </Text>
            )}
          </Flex>
        </SecondaryButton> */}
      </Flex>
    </Flex>
  );
};
