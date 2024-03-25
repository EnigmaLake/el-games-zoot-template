import type { Meta, StoryFn } from "@storybook/react";
import { BLUR } from "./blur";
import { Box, Flex } from "@chakra-ui/react";

export default {
  title: "Design System/Base Theme/Blur",
} as Meta;

const Template: StoryFn = () => {
  return (
    <Flex gap={6} flexDirection="column">
      {Object.keys(BLUR).map((key) => {
        const blur = BLUR[key];
        return (
          <Flex key={key} gap={2}>
            <Box
              bgColor="error-background"
              filter="auto"
              blur={blur}
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
