import type { Meta, StoryFn } from "@storybook/react";
import { DESIGN_SYSTEM_RADII } from "./radii";
import { Box, Flex } from "@chakra-ui/react";

export default {
  title: "Design System/Base Theme/Radii",
} as Meta;

const Template: StoryFn = () => {
  return (
    <Flex gap={2} flexDirection="column">
      {Object.keys(DESIGN_SYSTEM_RADII).map((key) => {
        const radius = DESIGN_SYSTEM_RADII[key];
        return (
          <Flex key={key} gap={2}>
            <Box
              bgColor="error-background"
              borderRadius={radius}
              width={16}
              height={16}
            />
            {key}
          </Flex>
        );
      })}
    </Flex>
  );
};

export const Playground = Template.bind({});
