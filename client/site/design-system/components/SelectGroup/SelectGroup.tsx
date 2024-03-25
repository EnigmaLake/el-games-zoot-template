import { useRadioGroup, Flex } from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";
import type { SelectGroupProps } from "./SelectGroupProps";
import { InternalCard } from "./SelectGroupCard";

/**
 * @description A select group should be used if you need to give the users a list of options of which they can only choose one.
 * Think of it as a stylized variant of a normal radio group.
 */
export const SelectGroup: FC<SelectGroupProps> = (props: SelectGroupProps) => {
  const {
    name = "",
    defaultValue,
    children,
    orientation = "vertical",
    width = "full",
    size = "medium",
    showRadio = true,
    onChange,
    ...rest
  } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <Flex
      {...group}
      display="flex"
      wrap="wrap"
      direction={orientation === "vertical" ? "column" : "row"}
      gap={2}
      height="min-content"
      w={width === "fit" ? "fit-content" : "100%"}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        const { value } = child.props;

        return (
          <InternalCard
            {...child.props}
            width={width}
            size={size}
            showRadio={showRadio}
            radioProps={getRadioProps({ value, disabled: true })}
          />
        );
      })}
    </Flex>
  );
};
