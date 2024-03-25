import type { Meta, StoryFn } from "@storybook/react";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import type { RadioGroupProps } from "./RadioGroupProps";

export default {
  title: "Design System/Radio/RadioGroup",
  component: RadioGroup,
  argTypes: {
    onChange: { action: "onChange" },
    columns: { control: { type: "number" } },
    groupLabel: {
      control: { type: "text" },
    },
  },
  args: {
    groupLabel: "Category",
  },
} as Meta<typeof RadioGroup>;

const Template: StoryFn<RadioGroupProps> = (args: RadioGroupProps) => {
  return <RadioGroup {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: [
    <Radio key={1}>Value 1</Radio>,
    <Radio key={2}>Value 2</Radio>,
    <Radio key={3}>Value 3</Radio>,
    <Radio key={4}>Value 4</Radio>,
  ],
} as RadioGroupProps;
