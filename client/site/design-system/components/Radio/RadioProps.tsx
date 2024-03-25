import { DesignSystemBaseProps, Size } from "../../types/shared";

export interface RadioProps extends DesignSystemBaseProps {
  /**
   * @description If the radio is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description If the radio is in error
   * @default false
   */
  error?: boolean;
  /**
   * @description The label next to the radio
   */
  children?: string;
  /**
   * @description The size of the radio button
   * @default md
   */
  size?: Extract<Size, "md" | "sm">;
  /**
   * @description Custom color for the label
   */
  labelColor?: string;
  /**
   * @description If the radio is checked
   */
  checked?: boolean;
  /**
   * @description Change handler invoked when the radio is checked
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description An option sub-label
   */
  subLabel?: string;
}
