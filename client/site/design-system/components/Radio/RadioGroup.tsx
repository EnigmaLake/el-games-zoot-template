import { Flex, SimpleGrid } from "@chakra-ui/react";
import type { FC } from "react";
import React, { ReactElement, useState } from "react";
import { Header } from "../Typography/Header";
import type { RadioGroupProps } from "./RadioGroupProps";
import type { RadioProps } from "./RadioProps";

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  groupLabel,
  onChange,
  columns = 1,
}) => {
  const initialState = children.reduce((acc, child) => {
    const { props: childProps } = child;
    acc[childProps.children] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const [checkedItems, setCheckedItems] = useState(initialState);

  // using a single item somehow caused infinite re-trigger
  // so keeping this record solution instead
  const handleChange = function handleChange(label: string) {
    const toggleCheckedItem = function toggleCheckedItem() {
      const newCheckedItems = {
        ...initialState,
        [label]: true,
      };
      setCheckedItems(newCheckedItems);
      onChange?.(newCheckedItems);
    };
    return toggleCheckedItem;
  };

  return (
    <Flex flexDirection="column" gap={3}>
      {groupLabel && <Header variant="h5">{groupLabel}</Header>}
      <SimpleGrid columns={columns} columnGap={2} rowGap={3}>
        {React.Children.map(
          children as unknown as RadioProps[],
          (child: RadioProps) => {
            const { props: childProps } = child as unknown as ReactElement;
            const isChecked = checkedItems[childProps?.children];
            return React.cloneElement(child as unknown as ReactElement, {
              checked: isChecked,
              onChange: handleChange(childProps?.children),
            });
          }
        )}
      </SimpleGrid>
    </Flex>
  );
};
