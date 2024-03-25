import { ComponentType, FC, ReactNode } from "react";
import { Button, MenuItem, useMultiStyleConfig } from "@chakra-ui/react";
import type { DropdownOptionProps } from "./DropdownProps";
import { Check1 } from "../../icons/library/Check1";

export const InternalDropdownOption: FC<DropdownOptionProps> = (props) => {
  const { children, onClick, selected, value, nonClickable } = props;
  const styles = useMultiStyleConfig("Dropdown");
  return (
    <MenuItem
      value={value}
      sx={nonClickable ? styles.nonClickableItem : styles.item}
      onClick={nonClickable ? undefined : onClick}
      display="flex"
      justifyContent="space-between"
      as={nonClickable ? "div" : Button}
      data-testid={`dropdown-option-${value}`}
      {...(selected && { rightIcon: <Check1 boxSize={5} /> })}
      height="fit-content"
      cursor={nonClickable ? "default" : "cursor"}
    >
      {children}
    </MenuItem>
  );
};

/**
 * We do not want to expose certain props to the consumer, as some should only come from the Dropdown parent component.
 * Therefore, we expose a wrapped DropdownOption component that eventually gets overridden by the InternalDropdownOption
 * when the Dropdown is rendering the children.
 * https://react-typescript-cheatsheet.netlify.app/docs/hoc/excluding_props/
 */

function withExternalDropdownOptionProps({
  selected,
  onClick,
  children,
  value,
  nonClickable,
}: {
  selected?: boolean;
  onClick?: () => void | undefined;
  children?: string | ReactNode | JSX.Element | JSX.Element[];
  value?: string;
  nonClickable?: boolean;
}) {
  return function <
    T extends {
      selected?: boolean;
      onClick?: () => void | undefined;
      children?: string | ReactNode | JSX.Element | JSX.Element[];
      value?: string;
      nonClickable?: boolean;
    }
  >(Component: ComponentType<T>) {
    return function DropdownOption(
      props: Omit<T, "selected" | "onClick">
    ): JSX.Element {
      const newProps = {
        ...props,
        selected,
        onClick,
        children,
        value,
        nonClickable,
      } as T;
      return <Component {...newProps} />;
    };
  };
}

export const DropdownOption = withExternalDropdownOptionProps({})(
  InternalDropdownOption
);
