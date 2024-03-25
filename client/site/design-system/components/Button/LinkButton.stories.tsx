import type { Meta, StoryFn } from "@storybook/react";
import { LinkButton } from "./LinkButton";
import type { LinkButtonProps } from "./LinkButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/LinkButton",
  component: LinkButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof LinkButton>;

const Template: StoryFn<LinkButtonProps> = (args: LinkButtonProps) => {
  return <LinkButton {...args} />;
};

const defaultProps = {
  width: "fit-content",
  children: "Click me",
  size: "md",
  disabled: false,
  loading: false,
  variant: "primary",
} as LinkButtonProps;

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
