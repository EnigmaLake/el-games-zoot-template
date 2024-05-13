import { toggleGameViewEvent } from "@enigma-lake/zoot-platform-sdk";
import { useRecoilState } from "recoil";
import { Box, Flex } from "@chakra-ui/react";

import {
  Compress,
  Frame,
  SecondaryButton,
  Text,
} from "../../../../design-system";
import { gameExpendedAtom } from "../../../../recoil/state/gameExpended";

export const ExpandButton = () => {
  const [isGameExpanded] = useRecoilState(gameExpendedAtom);

  return (
    <Box pos="absolute" top={4} right={4} zIndex={1}>
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
    </Box>
  );
};
