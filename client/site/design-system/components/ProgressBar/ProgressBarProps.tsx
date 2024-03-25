import { DesignSystemBaseProps } from "../../types/shared";

export interface ProgressBarProps extends DesignSystemBaseProps {
  /**
   * @description If the label should be shown underneath indicating the progress
   * @default false
   */
  showLabel?: boolean;
  /**
   * @description Percent complete between 0-100
   */
  progress: number;
}
