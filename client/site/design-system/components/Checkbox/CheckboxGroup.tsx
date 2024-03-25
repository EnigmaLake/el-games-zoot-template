import { Checkbox } from "./Checkbox";
import React, { ReactElement, useState } from "react";
import type { FC } from "react";
import type { CheckboxGroupProps } from "./CheckboxGroupProps";
import { Stack } from "@chakra-ui/react";
import type { CheckboxProps } from "./CheckboxProps";

export const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { children, groupLabel, onChange } = props;
  const [checkedItems, setCheckedItems] = useState(() => {
    return children.reduce((acc, child) => {
      const { props: childProps } = child;
      acc[childProps.children] = false;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const isIndeterminate =
    Object.values(checkedItems).some(Boolean) && !allChecked;

  const handleToggleAll = function handleToggleAll(checked: boolean) {
    const allCheckedItems = children.reduce((acc, child) => {
      const { props: childProps } = child as unknown as ReactElement;
      acc[childProps.children] = checked;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedItems(allCheckedItems);
    onChange?.(allCheckedItems);
  };

  const handleChange = function handleChange(label: string) {
    const toggleCheckedItem = function toggleCheckedItem() {
      const previousItemState = checkedItems[label];
      const newCheckedItems = {
        ...checkedItems,
        ...{ [label]: !previousItemState },
      };
      setCheckedItems(newCheckedItems);
      onChange?.(newCheckedItems);
    };
    return toggleCheckedItem;
  };

  return (
    <>
      <Checkbox
        onChange={handleToggleAll}
        indeterminate={isIndeterminate}
        checked={allChecked}
      >
        {groupLabel}
      </Checkbox>
      <Stack pl={4} mt={3} spacing={3}>
        {React.Children.map(
          children as unknown as CheckboxProps[],
          (child: CheckboxProps) => {
            const { props: childProps } = child as unknown as ReactElement;
            const isChecked = checkedItems[childProps.children];
            return React.cloneElement(child as unknown as ReactElement, {
              checked: isChecked,
              onChange: handleChange(childProps?.children),
            });
          }
        )}
      </Stack>
    </>
  );
};
