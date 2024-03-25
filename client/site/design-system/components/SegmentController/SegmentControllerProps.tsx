import { DesignSystemBaseProps, Size } from "../../types/shared";

export interface SegmentControllerProps extends DesignSystemBaseProps {
  /**
   * @description The label next to the checkbox
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * @description Change handler invoked when the segment controller is changed
   */
  onChange?: (value: string) => void;
  /**
   * @description The size of the Segment Controller
   * @default md
   */
  size?: Extract<Size, "sm">;
  /**
   * @description The width of the Segment controller
   * @default fit
   */
  width?: "full" | "fit-content";
  /**
   * @description The index of the selected tab
   */
  index?: number;
}

export interface SegmentProps {
  children?: string;
  /**
   * @description The size of the Segment
   * @default sm
   */
  size?: Extract<Size, "sm">;
  /**
   * @description The value of the segment returned when selected
   */
  value: string;
  /**
   * @description If the segment is the first in the list
   */
  isFirstSegment?: boolean;
  /**
   * @description If the segment is the last in the list
   */
  isLastSegment?: boolean;
  /**
   * @description If the segment is disabled
   * @default false
   */
  disabled?: boolean;
}
