import type { ComponentMeta, Story } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";
import type { CheckboxGroupProps } from "./CheckboxGroupProps";
import { Checkbox } from "./Checkbox";

export default {
  title: "Design System/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: Story<CheckboxGroupProps> = (args: CheckboxGroupProps) => {
  return <CheckboxGroup {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  groupLabel: "Check all",
  children: [
    <Checkbox key={1}>Value 1</Checkbox>,
    <Checkbox key={2}>Value 2</Checkbox>,
    <Checkbox key={3}>Value 3</Checkbox>,
    <Checkbox key={4}>Value 4</Checkbox>,
  ],
} as CheckboxGroupProps;
