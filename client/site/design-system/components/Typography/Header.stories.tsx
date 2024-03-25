import { Flex } from "@chakra-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { Header } from "./Header";
import type { HeaderProps } from "./HeaderProps";

export default {
  title: "Design System/Typography/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => {
  return <Header {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: "This is a header component.",
  variant: "h2",
  align: "left",
  width: "fit-content",
  color: "primary",
} as HeaderProps;

export const Scale = () => {
  return (
    <Flex gap={2} flexDirection="column">
      <Header variant="h1">This is an h1</Header>
      <Header variant="h2">This is an h2</Header>
      <Header variant="h3">This is an h3</Header>
      <Header variant="h4">This is an h4</Header>
      <Header variant="h5">This is an h5</Header>
      <Header variant="h6">This is an h6</Header>
    </Flex>
  );
};
