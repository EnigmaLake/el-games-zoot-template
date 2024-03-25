import type { Meta, StoryFn } from "@storybook/react";
import { Spinner } from "./Spinner";
import type { SpinnerProps } from "./SpinnerProps";

export default {
  title: "Design System/Spinner",
  component: Spinner,
  argTypes: {},
} as Meta<typeof Spinner>;

const Template: StoryFn<SpinnerProps> = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};

const defaultProps = {
  size: "xl",
} as SpinnerProps;

export const Playground = Template.bind({});
Playground.args = defaultProps;
