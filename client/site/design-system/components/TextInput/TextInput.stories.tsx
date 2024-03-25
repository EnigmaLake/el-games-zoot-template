import type { Meta, StoryFn } from "@storybook/react";
import { TextInput } from "./TextInput";
import type { TextInputProps } from "./TextInputProps";
import { Search } from "../../icons/library/Search";

export default {
  title: "Design System/TextInput",
  component: TextInput,
  argTypes: {
    leftIcon: {
      control: false,
    },
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<TextInputProps> = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

const defaultProps = {
  size: "md",
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  width: "fit-content",
  showSearchIcon: false,
  note: "Note",
} as TextInputProps;

export const Playground = Template.bind({});
Playground.args = defaultProps;

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  ...defaultProps,
  leftIcon: <Search />,
};

export const WrappingText = Template.bind({});
WrappingText.args = {
  ...defaultProps,
  label:
    "An extreeeemmmmeeeellllllyyyyy long label, like it's EXTREMMELLLYYYYY LONG",
  caption:
    "An extreeeemmmmeeeellllllyyyyy long caption, like it's EXTREMMELLLYYYYY LO",
  error:
    "An extreeeemmmmeeeellllllyyyyy long error, like it's EXTREMMELLLYYYYY LO",
};
