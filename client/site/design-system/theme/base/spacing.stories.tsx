import type { Meta, StoryFn } from "@storybook/react";
import { DESIGN_SYSTEM_SPACING } from "./spacing";
import { Box, Flex } from "@chakra-ui/react";

export default {
  title: "Design System/Base Theme/Spacing",
} as Meta;

const Template: StoryFn = () => {
  return (
    <Flex gap={2} flexDirection="column">
      {Object.keys(DESIGN_SYSTEM_SPACING)
        .sort((val1: string, val2: string) => {
          const space1 = parseFloat(val1);
          const space2 = parseFloat(val2);
          if (space1 > space2) {
            return 1;
          } else if (space2 < space1) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((key) => {
          const width = DESIGN_SYSTEM_SPACING[parseFloat(key)];
          return (
            <Flex key={key} gap={2}>
              <Box bgColor="error-background" width={width} />
              {key}
            </Flex>
          );
        })}
    </Flex>
  );
};

export const Playground = Template.bind({});
