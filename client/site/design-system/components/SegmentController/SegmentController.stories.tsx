import type { ComponentMeta, Story } from "@storybook/react";
import { SegmentController } from "./SegmentController";
import type { SegmentControllerProps } from "./SegmentControllerProps";
import { Segment } from "./Segment";

export default {
  title: "Design System/SegmentController",
  component: SegmentController,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof SegmentController>;

const Template: Story<SegmentControllerProps> = (
  args: SegmentControllerProps
) => {
  return <SegmentController {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  size: "sm",
  width: "full",
  children: [
    <Segment key="1" value="option 1">
      Option 1
    </Segment>,
    <Segment key="2" value="option 2">
      Option 2
    </Segment>,
    <Segment key="3" value="option 3">
      Option 3
    </Segment>,
  ],
} as SegmentControllerProps;

export const DisabledSegment = Template.bind({});
DisabledSegment.args = {
  size: "sm",
  width: "full",
  children: [
    <Segment key="1" value="option 1">
      Option 1
    </Segment>,
    <Segment key="2" value="option 2" disabled>
      Option 2
    </Segment>,
    <Segment key="3" value="option 3">
      Option 3
    </Segment>,
  ],
} as SegmentControllerProps;
