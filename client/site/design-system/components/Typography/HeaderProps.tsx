import type { DesignSystemBaseProps } from "../../types/shared";
import {
  TypographyAlignment,
  TypographyColor,
  TypographyWidth,
} from "./types/shared";

export type HeaderVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeaderProps extends DesignSystemBaseProps {
  /**
   * @description The color of the text
   * @default primary
   */
  color?: TypographyColor;
  /**
   * @description The text alignment
   * @default left
   */
  align?: TypographyAlignment;
  /**
   * @description The text
   */
  children: React.ReactNode;
  /**
   * @description The header level h1-h6
   */
  variant?: HeaderVariant;
  /**
   * @description The width of the typography element
   * @default fit
   */
  width?: TypographyWidth;
  /**
   * @description The text shadow of the typography element
   * @default fit
   */
  textShadow?: string;
}
