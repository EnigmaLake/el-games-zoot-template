import type { Meta, StoryFn } from "@storybook/react";
import { CloseButton } from "./CloseButton";
import type { CloseButtonProps } from "./CloseButton";

export default {
  title: "Design System/Button/CloseButton",
  component: CloseButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof CloseButton>;

const Template: StoryFn<CloseButtonProps> = (args: CloseButtonProps) => {
  return <CloseButton {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: "Click me",
  size: "md",
} as CloseButtonProps;
