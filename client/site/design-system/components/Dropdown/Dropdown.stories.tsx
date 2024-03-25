import type { Meta, StoryFn } from "@storybook/react";
import { Flex } from "@chakra-ui/react";
import { Dropdown } from "./Dropdown";
import type { DropdownProps } from "./DropdownProps";
import { DropdownOption } from "./DropdownOption";
import { Text } from "../Typography/Text";
import { Search } from "../../icons/library/Search";
import { Apple } from "../../icons/podcast/Apple";
import { useState } from "react";

export default {
  title: "Design System/Dropdown",
  component: Dropdown,
  argTypes: {
    onChange: { action: "onChange" },
    leftIcon: {
      control: false,
    },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => {
  const [buttonText, setButtonText] = useState<string>();
  return (
    <Dropdown
      {...args}
      type="single-select"
      onChange={(value: string) => setButtonText(value)}
      buttonText={buttonText}
    >
      <DropdownOption value="Menu Item 1" key={1}>
        <Text variant="base">Menu Item 1</Text>
      </DropdownOption>
      <DropdownOption value="Menu Item 2" key={2}>
        <Text variant="base">Menu Item 2</Text>
      </DropdownOption>
    </Dropdown>
  );
};

const defaultProps = {
  size: "md",
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  width: "fit-content",
  type: "single-select",
} as DropdownProps;

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

export const CustomDropdownOptions = () => {
  const [buttonText, setButtonText] = useState<string>();
  return (
    <Dropdown
      placeholder="Select one"
      type="single-select"
      buttonText={buttonText}
      onChange={(value: string) => setButtonText(value)}
    >
      <DropdownOption value="Menu Item 1" key={1}>
        <Flex
          justifyContent="space-between"
          gap={2}
          width="fit-content"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Search mr={1} />
            <Text variant="base">Menu Item 1</Text>
          </Flex>
          <Text width="fit-content" variant="small" color="secondary">
            Note
          </Text>
        </Flex>
      </DropdownOption>
      <DropdownOption value="Menu Item 2" key={2}>
        <Flex
          justifyContent="space-between"
          gap={2}
          width="full"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Search mr={1} />
            <Text variant="base">Menu Item 2</Text>
            <Apple ml={1} />
          </Flex>
          <Text width="fit-content" variant="small" color="secondary">
            Another note
          </Text>
        </Flex>
      </DropdownOption>
    </Dropdown>
  );
};
