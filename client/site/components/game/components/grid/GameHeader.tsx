import { Flex, useBreakpointValue } from "@chakra-ui/react";

import {
  Compress,
  Frame,
  SecondaryButton,
  Shield,
  Sound,
  Text,
} from "../../../../design-system";
import { DateAndTime } from "./DateAndTime";
import { useRecoilState } from "recoil";
import { gameExpendedAtom } from "../../../../recoil/state/gameExpended";

export const GameHeader = () => {
  const [isGameExpanded, setIsGameExpanded] = useRecoilState(gameExpendedAtom);

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
        <SecondaryButton borderRadius="xxl">
          <Flex alignItems="center" gap={1}>
            <Shield color="secondary" />
            {!isMobile && (
              <Text variant="small" color="secondary">
                Game Fairness
              </Text>
            )}
          </Flex>
        </SecondaryButton>
        {!isMobile && (
          <SecondaryButton
            borderRadius="xxl"
            onClick={() => setIsGameExpanded(!isGameExpanded)}
          >
            <Flex alignItems="center" gap={1}>
              {isGameExpanded ? <Compress /> : <Frame />}
              <Text variant="small" color="secondary">
                {isGameExpanded ? "Compress" : "Expand"}
              </Text>
            </Flex>
          </SecondaryButton>
        )}
        <SecondaryButton borderRadius="xxl">
          <Flex alignItems="center" gap={1}>
            <Sound />
            {!isMobile && (
              <Text variant="small" color="secondary">
                Mute
              </Text>
            )}
          </Flex>
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
