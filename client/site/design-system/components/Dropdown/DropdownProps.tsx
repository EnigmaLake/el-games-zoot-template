import { ReactNode } from "react";
import { DesignSystemBaseProps, Size } from "../../types/shared";
import { PlacementWithLogical, StyleProps } from "@chakra-ui/react";

type DropdownWidth = "fit-content" | "full";

type ConditionalProps =
  | {
      /**
       * @description If the dropdown is single select or multi select.
       * NOTE: The multi-select is not currently approved by design, so restrict to single select for now.
       * @default single-select
       */
      type?: "single-select";
      /**
       * @description Change handler invoked when an option is selected
       */
      onChange?: (value: string) => void;
      /**
       * @description If checkmark should appear on the selected option
       * @default false
       */
      showSelectedOption?: boolean;
      /**
       * @description Add custom style to the MenuButton
       */
      customButtonStyle?: StyleProps;
    }
  | {
      /**
       * @description If the dropdown is single select or multi select.
       * NOTE: The multi-select is not currently approved by design, so restrict to single select for now.
       * @default single-select
       */
      type?: "multi-select";
      /**
       * @description Change handler invoked when an option is selected
       */
      onChange?: (value: string[]) => void;
      /**
       * @description If checkmark should appear on the selected option
       * @default false
       */
      showSelectedOption?: boolean;
      /**
       * @description Add custom style to the MenuButton
       */
      customButtonStyle?: StyleProps;
    };

interface CommonProps extends DesignSystemBaseProps {
  /**
   * @description If the Dropdown is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description The size of the button
   * @default md
   */
  size?: Extract<Size, "lg" | "md" | "sm">;
  /**
   * @description The error text
   */
  error?: string;
  /**
   * @description The caption text
   */
  caption?: string;
  /**
   * @description The label above the input
   */
  label?: string;
  /**
   * @description Default value of the dropdown
   */
  defaultValue?: string | string[];
  /**
   * @description The width of the input
   * @default fit
   */
  width?: DropdownWidth | string;
  /**
   * @description The placeholder text
   * @default fit
   */
  placeholder?: string;
  /**
   * @description Optional note text to be displayed to the right of the input field
   * @default false
   */
  note?: string;
  /**
   * @description The icon to display inset on the left of the text input
   * @default false
   */
  leftIcon?: JSX.Element | undefined;
  /**
   * @description The list of DropdownOptions
   */
  children?: React.ReactNode;
  /**
   * @description The text inside of the dropdown button
   */
  buttonText?: string;
  /**
   * @description The placement of the menu relative to its container.
   */
  menuOffset?: [number, number];
  /**
   * @description The placement of the menu relative to its reference.
   */
  menuPlacement?: PlacementWithLogical;
  /**
   * @description Optional component used for custom design for selected value
   */
  customSelectedComponent?: ReactNode;
  /**
   * @description If the chevron should be shown
   */
  showChevron?: boolean;
}

export type DropdownProps = CommonProps & ConditionalProps;

export interface DropdownOptionProps {
  /**
   * @description The contents of the dropdown option
   */
  children: string | ReactNode | JSX.Element | JSX.Element[];
  /**
   * @description If the item is selected
   * @default false
   */
  selected?: boolean;
  /**
   * @description The click handler for when the option is selected
   */
  onClick?: () => void | undefined;
  /**
   * @description The value of the item that will be returned when selected
   */
  value: string;
  /**
   * @description For information text inside menu list
   */
  nonClickable?: boolean;
}
