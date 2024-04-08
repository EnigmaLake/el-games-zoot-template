import { Ref } from "react";
import { DesignSystemBaseProps, Size } from "../../types/shared";

type InputWidth = "fit-content" | "full";

export interface NumberInputProps extends DesignSystemBaseProps {
  /**
   * @description The size of the button
   * @default md
   */
  size?: Extract<Size, "lg" | "md" | "sm">;
  /**
   * @description minimum value
   */
  min?: number;
  /**
   * @description maximum value
   */
  max?: number;
  /**
   * @description default value
   */
  defaultValue?: string | number;
  /**
   * @description placeholder value
   */
  placeholder?: string;
  /**
   * @description input value
   */
  precision?: number;
  /**
   * @description input step size when using +/- or up down arrows
   */
  step?: number;
  /**
   * @description is this field disabled
   */
  disabled?: boolean;
  /**
   * @description The label above the input
   */
  label?: string;
  /**
   * @description The error text
   */
  error?: string;
  /**
   * @description The caption text
   */
  caption?: string;
  /**
   * @description Change handler invoked when the input is changed
   */
  onChange: (valueAsNumber: number) => void;
  /**
   * @description The width of the input
   * @default fit
   */
  width?: InputWidth;
  /**
   * @description reference to underlying native element (to manage focus if needed)
   */
  ref?: Ref<{ setValue: (_value: number) => void }>;
  /**
   * @description If provided, the user won't be able to manually change the value and default value will be applied
   * */
  readOnlyInput?: boolean;
  /**
   *  @description whether to show +/- button for input
   * @default true
   */
  showButtons?: boolean;
}
