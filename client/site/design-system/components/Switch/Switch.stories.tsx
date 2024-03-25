import type { ComponentMeta, Story } from "@storybook/react";
import { Switch } from "./Switch";
import type { SwitchProps } from "./SwitchProps";

export default {
  title: "Design System/Switch",
  component: Switch,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof Switch>;

const Template: Story<SwitchProps> = (args: SwitchProps) => {
  return <Switch {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: "Toggle me",
  labelColor: "#fff",
  size: "md",
  disabled: false,
} as SwitchProps;
