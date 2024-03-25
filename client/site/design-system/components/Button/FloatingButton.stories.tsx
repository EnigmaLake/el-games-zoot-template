import type { Meta, StoryFn } from "@storybook/react";
import { FloatingButton } from "./FloatingButton";
import type { FloatingButtonProps } from "./FloatingButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/FloatingButton",
  component: FloatingButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof FloatingButton>;

const Template: StoryFn<FloatingButtonProps> = (args: FloatingButtonProps) => {
  return <FloatingButton {...args} />;
};

const defaultProps = {
  width: "fit-content",
  children: "Click me",
  quantity: 24,
  size: "md",
} as FloatingButtonProps;

export const Playground = Template.bind({});
Playground.args = {} as FloatingButtonProps;
Playground.args = defaultProps;

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  ...defaultProps,
  leftIcon: <AddIcon />,
};
