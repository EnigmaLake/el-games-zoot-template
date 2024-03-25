import { DesignSystemBaseProps, Size } from "../../types/shared";

export interface SpinnerProps extends DesignSystemBaseProps {
  /**
   * @description The size of the button
   * @default xs
   */
  size?: Extract<Size, "2xl" | "xl" | "lg" | "md" | "sm" | "xs">;
  /**
   * @description Custom color for the spinner
   */
  color?: string;
}
