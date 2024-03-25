import type { Meta, StoryFn } from "@storybook/react";
import { Divider } from "./Divider";
import type { DividerProps } from "./DividerProps";
import React from "react";

export default {
  title: "Design System/Divider",
  component: Divider,
  argTypes: {},
} as Meta<typeof Divider>;

const Template: StoryFn<DividerProps> = (args: DividerProps) => {
  return <Divider {...args} />;
};

const defaultProps = {
  variant: "primary",
} as DividerProps;

export const Playground = Template.bind({});
Playground.args = defaultProps;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultProps,
  variant: "secondary",
};
