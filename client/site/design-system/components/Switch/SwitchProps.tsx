import { ReactNode } from "react";
import { DesignSystemBaseProps, Size } from "../../types/shared";
import { SystemStyleObject } from "@chakra-ui/styled-system";

export interface SwitchProps extends DesignSystemBaseProps {
  /**
   * @description If the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description The label next to the checkbox
   */
  children?: string | ReactNode;
  /**
   * @description The size of the button
   * @default md
   */
  size?: Extract<Size, "lg" | "md" | "sm">;
  /**
   * @description Custom color for the label
   */
  labelColor?: string;
  /**
   * @description If the checkbox is checked
   */
  checked?: boolean;
  /**
   * @description Change handler invoked when the checkbox is checked
   */
  onChange?: (checked: boolean) => void;
  sx?: SystemStyleObject;
}
