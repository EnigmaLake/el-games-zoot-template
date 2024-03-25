import { DesignSystemBaseProps, Size } from "../../types/shared";

type InputWidth = "fit-content" | "full";

export interface TextInputProps extends DesignSystemBaseProps {
  /**
   * @description If the TextInput is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description The size of the button
   * @default md
   */
  size?: Extract<Size, "lg" | "md" | "sm" | "xs">;
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
   * @description The value of the text input
   */
  value?: string;
  /**
   * @description Change handler invoked when the checkbox is checked
   */
  onChange?: (value: string) => void;
  /**
   * @description The width of the input
   * @default fit
   */
  width?: InputWidth;
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
  variant?: "base" | "light";
}
