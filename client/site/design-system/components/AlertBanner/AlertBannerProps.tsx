import { SyntheticEvent } from "react";
import { DesignSystemBaseProps } from "../../types/shared";

export interface AlertBannerProps extends DesignSystemBaseProps {
  /**
   * @description The type of message to display.
   */
  variant: "success" | "error" | "warning" | "info" | "errorWithPadding";
  /**
   * @description Optional: The type of icon to display.
   */
  iconVariant?: "success" | "error" | "warning" | "info";
  /**
   * @description Determines if the banner will show an icon. Default: true.
   */
  showIcon?: boolean;
  /**
   * @description Determines if the banner will show a loading icon. Default: false.
   */
  loading?: boolean;
  /**
   * @description If passed, will display a button with the given label.
   */
  buttonLabel?: string;

  /**
   * @description Callback to execute when the button is clicked.
   */
  buttonOnClick?(e?: SyntheticEvent): void;
  /**
   * @description If passed, will stretch width to fit parent container
   */
  full?: boolean;
}
