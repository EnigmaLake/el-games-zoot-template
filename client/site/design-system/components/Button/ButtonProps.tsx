import { ResponsiveValue } from "@chakra-ui/react";
import type { DesignSystemBaseProps, Size } from "../../types/shared";
import { TypographyColor } from "../Typography/types/shared";
import { SyntheticEvent } from "react";

type ButtonWidth = "fit-content" | "full" | "xxs" | "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends DesignSystemBaseProps {
  id?: string;
  /**
   * @description The callback for when the button is clicked
   */
  onClick?: (e?: SyntheticEvent) => void;
  /**
   * @description The width of the button
   * @default fit
   */
  width?: ResponsiveValue<ButtonWidth> | string;
  /**
   * @description The height of the button
   * @default fit
   */
  height?: ResponsiveValue<ButtonWidth> | string;
  /**
   * @description If the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description The icon to display to the left of the button text
   * @default false
   */
  leftIcon?: JSX.Element | undefined;
  /**
   * @description The icon to display to the right of the button text
   * @default undefined
   */
  rightIcon?: JSX.Element | undefined;
  /**
   * @description The text for the button
   */
  children: React.ReactNode;
  /**
   * @description The size of the button
   * @default md
   */
  size?: Size;
  /**
   * @description If the button is in a loading state
   * @default false
   */
  loading?: boolean;
  /**
   * @description The button variant
   * @default primary
   */
  variant?:
    | "danger"
    | "primary"
    | "tertiary"
    | "secondary"
    | "success"
    | "warning"
    | "ghost"
    | "dark"
    | "green"
    | "yellow"
    | "purple";
  /**
   * @description The button's text color
   */
  textColor?: TypographyColor;
  /**
   * @description The justification of the content inside of the button
   */
  justifyContent?: "space-between" | "space-evenly";
  /**
   * @description The button's border color
   */
  borderColor?: string;
  /**
   * @description The button's border width
   */
  borderWidth?: number;
  /**
   * @description If the button should use the callout text variant. Works only for XS size.
   * @default false
   */
  callout?: boolean;
  /**
   * @description Button type.
   * @default undefined
   */
  type?: "button" | "submit" | "reset";
  /**
   * @description Button border radius.
   * @default undefined
   */
  borderRadius?: "sm" | "md" | "lg" | "xl" | "xxl";
  /**
   * @description Button horizontal padding/text margin.
   * @default undefined
   */
  noHorizontalPadding?: boolean;
}
