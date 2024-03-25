import { Flex } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";
import type { TextProps, TypographyVariant } from "./TextProps";

export default {
  title: "Design System/Typography/Text",
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args: TextProps) => {
  return <Text {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: "This is a Text component.",
  variant: "base",
  align: "left",
  width: "fit-content",
  color: "primary",
  as: "span",
} as TextProps;

const variants: TypographyVariant[] = [
  "large",
  "large-bold",
  "large-callout",
  "base",
  "base-bold",
  "base-callout",
  "base-monospace",
  "base-paragraph",
  "base-paragraph-bold",
  "small",
  "small-bold",
  "small-callout",
  "small-paragraph",
  "small-paragraph-bold",
  "footnote",
  "footnote-bold",
  "footnote-overline",
  "subscript-overline",
];

export const Variants = () => {
  return (
    <Flex flexDirection="column" gap={2}>
      {variants.map((variant) => (
        <Text key={variant} variant={variant}>
          This is text in {variant}
        </Text>
      ))}
    </Flex>
  );
};
