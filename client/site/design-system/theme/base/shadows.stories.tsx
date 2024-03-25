import type { Meta, StoryFn } from "@storybook/react";
import { SHADOWS } from "./shadows";
import { Box, Flex } from "@chakra-ui/react";

export default {
  title: "Design System/Base Theme/Shadows",
} as Meta;

const Template: StoryFn = () => {
  return (
    <Flex gap={2} flexDirection="column">
      {Object.keys(SHADOWS).map((key) => {
        const shadow = SHADOWS[key];
        return (
          <Flex key={key} gap={2}>
            <Box
              bgColor="error-background"
              boxShadow={shadow}
              width={16}
              height={16}
            />
          </Flex>
        );
      })}
    </Flex>
  );
};

export const Playground = Template.bind({});
