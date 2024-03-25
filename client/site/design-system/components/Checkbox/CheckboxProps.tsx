import React from "react";
import { DesignSystemBaseProps, Size } from "../../types/shared";

export interface CheckboxProps extends DesignSystemBaseProps {
  /**
   * @description If the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description If the checkbox is in error
   * @default false
   */
  error?: boolean;
  /**
   * @description The label next to the checkbox
   */
  children?: string;
  /**
   * @description The size of the button
   * @default md
   */
  size?: Extract<Size, "md" | "sm">;
  /**
   * @description Custom color for the label
   */
  labelColor?: string;
  /**
   * @description If the checkbox is indeterminate. Indeterminate is used in a group if some of the options in a list are checked, but not all.
   */
  indeterminate?: boolean;
  /**
   * @description If the checkbox is checked
   */
  checked?: boolean;
  /**
   * @description Change handler invoked when the checkbox is checked
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description An option sub-label
   */
  subLabel?: string;
  /**
   * @description An option icon
   */
  icon?: React.JSX.Element;
}
