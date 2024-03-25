import type { Meta, StoryFn } from "@storybook/react";
import { IconButton } from "./IconButton";
import type { IconButtonProps } from "./IconButton";
import { AddIcon } from "@chakra-ui/icons";

export default {
  title: "Design System/Button/IconButton",
  component: IconButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<IconButtonProps> = (args: IconButtonProps) => {
  return <IconButton {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  children: <AddIcon />,
  size: "md",
  disabled: false,
  loading: false,
  rounded: false,
} as IconButtonProps;
