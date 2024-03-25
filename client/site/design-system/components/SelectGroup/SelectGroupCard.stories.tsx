import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InternalCard as SelectGroupCard } from "./SelectGroupCard";
import type { InternalCardProps as SelectGroupCardProps } from "./SelectGroupCard";

export default {
  title: "Design System/Select Group/Card",
  component: SelectGroupCard,
} as Meta<typeof SelectGroupCard>;

const Template: StoryFn<SelectGroupCardProps> = (
  args: SelectGroupCardProps
) => {
  return <SelectGroupCard {...args}>Option 1</SelectGroupCard>;
};

export const Playground = Template.bind({});
Playground.args = {
  value: "option-1",
  disabled: false,
} as SelectGroupCardProps;
Playground.parameters = {
  controls: {
    include: ["value", "disabled"],
  },
};
