import type { Meta, StoryFn } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import { Tabs } from "./Tabs";
import type { TabsProps } from "./TabProps";
import { Check1 } from "../../icons/library/Check1";

export default {
  title: "Design System/Tabs/Tabs/Examples",
  component: Tabs,
  argTypes: {
    width: {
      control: {
        type: "radio",
      },
      options: ["full", "fit-content"],
      description: "Width of Tabs component",
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["sm", "md", "lg", "xl"],
    },
    tabs: {
      control: "object",
      description: "Array of ReactNodes to render as the tabs",
    },
    panels: {
      control: "object",
      description:
        "Array of ReactNodes to render as the panels. One-to-one mapping between tabs and panels. Panels should ideally be composed of other DS components. If a panel consists of a string, then it will use the default sizing provided by Chakra",
    },
    lazyBehavior: {
      control: {
        type: "radio",
      },
      options: ["unmount", "keepMounted"],
      description: "behavior for non-active tabs",
    },
    defaultTabIndex: {
      control: {
        type: "number",
        disable: true,
      },
      description:
        "Index of tab that should be active on initial render. By default changing this prop will not change the active tab, that would require rendering a new component. (See story code for additonal details)\n\nDefault value is a computed value; Tabs will use the index of first non-disabled tab. (See TabListItem type for more details).",
    },
    isFitted: {
      control: "boolean",
      description:
        "Determines if the tabs will expand to fill the TabList area. If isFitted each tabs will have a uniform width",
    },
    justifyContent: {
      control: {
        type: "radio",
      },
      options: ["left", "center", "right"],
    },
    index: {
      control: {
        type: "number",
        min: 0,
        step: 1,
      },
      description:
        "Index of the active tab -- used for when the active tab index is maintained by a parent component. If provided, defaultTabIndex is overriden by this value",
    },
  },
} as Meta<typeof Tabs>;

// Wrapped in a container

const Wrapped: StoryFn<TabsProps> = (args) => {
  return (
    <Box width="90vw">
      <Tabs key={JSON.stringify(args)} {...args} />
    </Box>
  );
};

export const ParentWithWidth = Wrapped.bind({});
ParentWithWidth.args = {
  isFitted: true,
  lazyBehavior: "unmount",
  tabs: [
    "Tab 1",
    { text: "Tab 2", isDisabled: true },
    { text: "Tab 3", icon: <Check1 /> },
  ],
  panels: [
    "Tab 1 contents",
    "Tab 2 contents",
    <div key="eslint-key">
      <h1>Tab 3</h1>
    </div>,
  ],
  width: "full",
  size: "md",
  defaultTabIndex: 0,
  justifyContent: "left",
};

// Not Wrapped in a container
const Template: StoryFn<TabsProps> = (args: TabsProps) => {
  /**
   * Please note, this use is not encouraged.
   * It is only possible if ts checking is disabled
   */
  return <Tabs {...args} key={JSON.stringify(args)} />;
};

export const TabsWidth = Template.bind({});
TabsWidth.args = {
  isFitted: true,
  lazyBehavior: "unmount",
  tabs: ["Tab 1", { text: "Tab 2" }, { text: "Tab 3", icon: <Check1 /> }],
  panels: [
    "Tab 1 contents",
    "Tab 2 contents",
    <div key="eslint-key">
      <h1>Tab 3</h1>
    </div>,
  ],
  width: "50vw",
  size: "md",
  defaultTabIndex: 0,
} as TabsProps;

export const IndicatorOptions = Template.bind({});
IndicatorOptions.args = {
  isFitted: true,
  lazyBehavior: "unmount",
  tabs: ["Tab 1", { text: "Tab 2" }, { text: "Tab 3", icon: <Check1 /> }],
  panels: [
    "Tab 1 contents",
    "Tab 2 contents",
    <div key="eslint-key">
      <h1>Tab 3</h1>
    </div>,
  ],
  width: "50vw",
  size: "md",
  defaultTabIndex: 0,
  indicatorPosition: "top",
  indicatorColor: "red",
} as TabsProps;
