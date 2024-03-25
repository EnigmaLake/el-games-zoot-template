import React, { FC, ReactElement } from "react";
import { SegmentControllerProps, SegmentProps } from "./SegmentControllerProps";
import { TabList, Tabs } from "@chakra-ui/react";
import { InternalSegment } from "./Segment";

// TO DO: This component is not finished and can be considered in Beta. Use at your own risk.
export const SegmentController: FC<SegmentControllerProps> = (props) => {
  const { children, onChange, size = "sm", width = "full" } = props;

  const handleChange = function handleChange(index: number) {
    const value = (React.Children.toArray(children)[index] as ReactElement)
      .props.value;
    onChange?.(value);
  };
  return (
    <Tabs onChange={handleChange} index={props.index}>
      <TabList borderRadius="sm" display="flex" width={width} gap="1px">
        {React.Children.map(
          children as unknown as SegmentProps[],
          (child: SegmentProps, index: number) => {
            const { props: childProps } = child as unknown as ReactElement;
            return (
              <InternalSegment
                {...childProps}
                size={size}
                isFirstSegment={index === 0}
                isLastSegment={index === React.Children.count(children) - 1}
              />
            );
          }
        )}
      </TabList>
    </Tabs>
  );
};
