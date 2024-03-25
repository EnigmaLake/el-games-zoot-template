import type { Meta, StoryFn } from "@storybook/react";
import { Flex } from "@chakra-ui/react";
import { SelectGroup } from "./SelectGroup";
import { SelectGroupCard } from "./SelectGroupCard";
import type { SelectGroupProps } from "./SelectGroupProps";
import { Check1 } from "../../icons/library/Check1";
import { Minus } from "../../icons/library/Minus";

export default {
  title: "Design System/Select Group/SelectGroup",
  component: SelectGroup,
  argTypes: {
    width: {
      control: {
        type: "radio",
      },
      options: ["full", "fit"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["medium", "large"],
    },
    orientation: {
      control: {
        type: "radio",
      },
      options: ["vertical", "horizontal"],
    },
    onChange: { action: "onChange" },
  },
} as Meta<typeof SelectGroup>;

const Template: StoryFn<SelectGroupProps> = (args: SelectGroupProps) => {
  return (
    <SelectGroup {...args}>
      <SelectGroupCard key="option-1" value="option-1">
        Option 1
      </SelectGroupCard>
      <SelectGroupCard key="option-2" value="option-2">
        Option 2
      </SelectGroupCard>
      <SelectGroupCard key="option-3" value="option-3">
        Option 3
      </SelectGroupCard>
      <SelectGroupCard key="option-4" value="option-4">
        Option 4
      </SelectGroupCard>
      <SelectGroupCard key="option-5" value="option-5">
        Option 5
      </SelectGroupCard>
    </SelectGroup>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  name: "options",
  defaultValue: "option-1",
  size: "medium",
  orientation: "vertical",
  showRadio: true,
  width: "full",
} as SelectGroupProps;

export const RadioCards = () => {
  return (
    <SelectGroup
      showRadio
      defaultValue="option-1"
      orientation="horizontal"
      width="fit"
    >
      <SelectGroupCard key="option-1" value="option-1">
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-2" value="option-2">
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-3" value="option-3">
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-4" value="option-4">
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-5" value="option-5">
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
    </SelectGroup>
  );
};

export const IconCards = () => {
  return (
    <SelectGroup
      width="fit"
      defaultValue="option-1"
      name="icon-cards"
      orientation="horizontal"
      showRadio={false}
    >
      <SelectGroupCard key="option-1" value="option-1">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="112px"
        >
          <Check1 />
          <span>Content</span>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-2" value="option-2">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="112px"
        >
          <Minus />
          <span>Other content</span>
        </Flex>
      </SelectGroupCard>
    </SelectGroup>
  );
};

export const Disabled = () => {
  return (
    <SelectGroup
      showRadio
      defaultValue="option-1"
      orientation="horizontal"
      width="fit"
    >
      <SelectGroupCard key="option-1" value="option-1">
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-2" value="option-2" disabled>
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
      <SelectGroupCard key="option-3" value="option-3" disabled>
        <Flex direction="column">
          <div>Buy all</div>
          <div>
            Choose this option if you wish to buy a specific number of copies of
            each card.
          </div>
        </Flex>
      </SelectGroupCard>
    </SelectGroup>
  );
};
