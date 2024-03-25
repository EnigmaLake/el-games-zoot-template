import type { DesignSystemBaseProps } from "../../types/shared";

export type Size = "medium" | "large";
export type Orientation = "vertical" | "horizontal";
export type Width = "full" | "fit";

export interface SelectGroupCardProps {
  /**
   * @description The value of the card. What will be returned when the item is clicked.
   */
  value: string;
  /**
   * @description If the card is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description The contents of the card
   */
  children?: React.ReactNode;
}

export interface SelectGroupProps extends DesignSystemBaseProps {
  /**
   * @description The name of the select group
   * @default ""
   */
  name?: string;
  /**
   * @description The default value of the select group when it loads
   */
  defaultValue: string;
  /**
   * @description If the radio circle should show or not
   * @default true
   */
  showRadio?: boolean;
  /**
   * @description The size of the select group cards
   * @default medium
   */
  size?: Size;
  /**
   * @description The orientation of the select group
   * @default vertical
   */
  orientation?: Orientation;
  /**
   * @default full
   * @description If the width of the cards should expand their container or fit their content
   */
  width?: Width;
  /**
   * The children cards
   */
  children: React.ReactNode;
  /**
   * Callback for when the value is changed
   */
  onChange?: (nextValue: string) => void;
}
