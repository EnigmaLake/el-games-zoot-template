import type { Meta, StoryFn } from "@storybook/react";
import { TertiaryButton } from "./TertiaryButton";
import type { TertiaryButtonProps } from "./TertiaryButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/TertiaryButton",
  component: TertiaryButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof TertiaryButton>;

const Template: StoryFn<TertiaryButtonProps> = (args: TertiaryButtonProps) => {
  return <TertiaryButton {...args} />;
};

const defaultProps = {
  width: "fit-content",
  children: "Click me",
  size: "md",
  disabled: false,
  loading: false,
} as TertiaryButtonProps;

export const Playground = Template.bind({});
Playground.args = defaultProps;

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  ...defaultProps,
  leftIcon: <AddIcon />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  ...defaultProps,
  rightIcon: <AddIcon />,
};

export const DoubleIcon = Template.bind({});
DoubleIcon.args = {
  ...defaultProps,
  leftIcon: <AddIcon />,
  rightIcon: <AddIcon />,
};
