import type { Meta, StoryFn } from "@storybook/react";
import { Radio } from "./Radio";
import type { RadioProps } from "./RadioProps";

export default {
  title: "Design System/Radio/Radio",
  component: Radio,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as Meta<typeof Radio>;

const Template: StoryFn<RadioProps> = (args: RadioProps) => {
  return <Radio {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  size: "md",
  children: "Label",
  labelColor: "#0f0",
  error: false,
  disabled: false,
  subLabel: "137",
} as RadioProps;

export const LongLabel = () => {
  return (
    <Radio>
      {`This is an extremely long label that wraps, when will it end...no one ever knows it's so crazy how long it can get before it wraps I really hope it stays centered.`}
    </Radio>
  );
};
