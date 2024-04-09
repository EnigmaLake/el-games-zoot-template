import { toggleGameViewEvent } from "@enigma-lake/zoot-game-integration-sdk";
import { useRecoilState } from "recoil";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

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

  const isMobile = useBreakpointValue({
    xl: false,
    lg: false,
    md: false,
    base: false,
    "2sm": false,
    sm: true,
    xs: true,
    xxs: true,
  });

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
        {!isMobile && (
          <SecondaryButton
            borderRadius="xxl"
            onClick={() => toggleGameViewEvent({ expanded: !isGameExpanded })}
          >
            <Flex alignItems="center" gap={1}>
              {isGameExpanded ? <Compress /> : <Frame />}
              <Text variant="small" color="secondary">
                {isGameExpanded ? "Compress" : "Expand"}
              </Text>
            </Flex>
          </SecondaryButton>
        )}
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
