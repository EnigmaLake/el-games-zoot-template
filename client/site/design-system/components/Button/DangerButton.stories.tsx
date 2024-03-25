import type { Meta, StoryFn } from "@storybook/react";
import { DangerButton } from "./DangerButton";
import type { DangerButtonProps } from "./DangerButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/DangerButton",
  component: DangerButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof DangerButton>;

const Template: StoryFn<DangerButtonProps> = (args: DangerButtonProps) => {
  return <DangerButton {...args} />;
};

const defaultProps = {
  width: "fit-content",
  children: "Click me",
  size: "md",
  disabled: false,
  loading: false,
} as DangerButtonProps;

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
