import type { ComponentMeta, Story } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./CheckboxProps";

export default {
  title: "Design System/Checkbox/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  size: "md",
  children: "Label",
  labelColor: "#fff",
  indeterminate: false,
  error: false,
  disabled: false,
  subLabel: "137",
} as CheckboxProps;

export const LongLabel = () => {
  return (
    <Checkbox>
      {`This is an extremely long label that wraps, when will it end...no one ever knows it's so crazy how long it can get before it wraps I really hope it stays centered.`}
    </Checkbox>
  );
};
