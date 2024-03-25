import type { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";
import type { TabsProps } from "./TabProps";
import { Check1 } from "../../icons/library/Check1";

export default {
  title: "Design System/Tabs/Tabs",
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
      description: `
      Index of tab that should be active on initial render. By default changing this prop will not change the active tab, that would require rendering a new component. (See story code for additonal details)
      
      Default value is a computed value; Tabs will use the index of first non-disabled tab. (See TabListItem for details).
      `,
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

const Template: StoryFn<TabsProps> = (args: TabsProps) => {
  // the key being used here is defaultTabIndex to allow the changes via the control panel to be reflected in storybook
  // while this is an example of how to programmatically control the selected tab using defaultTabIndex
  // this is discouraged because it will unmount the previous tabs and create a new component
  // please instead use props.index
  return (
    <div style={{ width: "800px", border: "1px solid #ccc" }}>
      <Tabs key={`tabs-storybook-${args.defaultTabIndex}`} {...args} />
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  isFitted: true,
  lazyBehavior: "unmount",
  tabs: ["Tab 1", { text: "Tab 2" }, { text: "Tab 3", icon: <Check1 /> }],
  panels: [
    "Tab 1 contents",
    "Tab 2 contents",
    <div key="eslint-hoop">
      <h1>Tab 3</h1>
    </div>,
  ],
  width: "full",
  size: "md",
  defaultTabIndex: 0,
  justifyContent: "left",
} as TabsProps;
