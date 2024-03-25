import type { Meta, StoryFn } from "@storybook/react";
import { SecondaryButton } from "./SecondaryButton";
import type { SecondaryButtonProps } from "./SecondaryButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/SecondaryButton",
  component: SecondaryButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof SecondaryButton>;

const Template: StoryFn<SecondaryButtonProps> = (
  args: SecondaryButtonProps
) => {
  return <SecondaryButton {...args} />;
};

const defaultProps = {
  width: "fit-content",
  children: "Click me",
  size: "md",
  disabled: false,
  loading: false,
} as SecondaryButtonProps;
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
