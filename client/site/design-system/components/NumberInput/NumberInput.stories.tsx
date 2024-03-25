import { Meta, StoryFn } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { NumberInputProps } from "./NumberInputProps";

export default {
  title: "Design System/NumberInput",
  component: NumberInput,
  argTypes: {
    onChange: { action: "onChange" },
    size: {
      control: {
        type: "radio",
      },
      options: ["sm", "md", "lg"],
    },
    showButtons: {
      control: "boolean",
      options: [true, false],
    },
    disabled: {
      control: "boolean",
      options: [true, false],
    },
    readOnlyInput: {
      control: "boolean",
      options: [true, false],
    },
  },
} as Meta<typeof NumberInput>;

const Template: StoryFn<NumberInputProps> = (args: NumberInputProps) => {
  return <NumberInput {...args} />;
};

const defaultProps = {
  size: "md",
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  width: "fit-content",
  min: 1,
  max: 10,
  error: "error",
  caption: "caption",
} as NumberInputProps;

export const Playground = Template.bind({});
Playground.args = defaultProps;
