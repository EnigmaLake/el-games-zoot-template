import type { Meta, StoryFn } from "@storybook/react";
import { PrimaryButton } from "./PrimaryButton";
import type { PrimaryButtonProps } from "./PrimaryButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof PrimaryButton>;

const Template: StoryFn<PrimaryButtonProps> = (args: PrimaryButtonProps) => {
  return <PrimaryButton {...args} />;
};

const defaultProps = {
  width: "fit-content",
  children: "Click me",
  size: "md",
  disabled: false,
  loading: false,
} as PrimaryButtonProps;
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
