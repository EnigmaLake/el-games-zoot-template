import type { Meta, StoryFn } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import type { ProgressBarProps } from "./ProgressBarProps";

export default {
  title: "Design System/ProgressBar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<ProgressBarProps> = (args: ProgressBarProps) => {
  return <ProgressBar {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  showLabel: true,
  progress: 10,
} as ProgressBarProps;
