import { Box, Flex, Grid } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import colors from "./colors";

export default {
  title: "Design System/Base Theme/Colors",
} as Meta;

const getColorTokenDisplay = (color: string) => {
  return (
    <Flex gap={2} flexDirection="column">
      <Box bgColor={color} height={16} />
      {color}
    </Flex>
  );
};

export const Colors: StoryFn = () => {
  return (
    <Flex gap={2}>
      <Flex flexDirection="column" gap={2}>
        <Grid templateColumns="repeat(12, minmax(0, 1fr))" gap={4}>
          {Object.keys(colors).map((token) => getColorTokenDisplay(token))}
        </Grid>
      </Flex>
    </Flex>
  );
};
