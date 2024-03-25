import type { DesignSystemBaseProps } from "../../types/shared";
import type {
  TypographyAlignment,
  TypographyColor,
  TypographyWidth,
} from "./types/shared";
import type { TextProps as ChakraTextProps } from "@chakra-ui/react";

export type TypographyAs = "p" | "span" | "div" | "label";

type ContentTitle = "large" | "large-bold" | "large-callout";
type Content =
  | "base"
  | "base-bold"
  | "base-bold-ellipsis"
  | "base-callout"
  | "base-monospace"
  | "base-paragraph"
  | "base-paragraph-bold";
type Subtext =
  | "small"
  | "small-bold"
  | "small-callout"
  | "small-paragraph"
  | "small-paragraph-bold";
type Footnote = "footnote" | "footnote-bold" | "footnote-overline";
type Subscript = "subscript-overline";

export type TypographyVariant =
  | ContentTitle
  | Content
  | Subtext
  | Footnote
  | Subscript;

export interface TextProps extends DesignSystemBaseProps {
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
   * @description The underlying HTML element that wraps the text
   */
  as?: TypographyAs;
  /**
   * @description The type of typography
   */
  variant?: TypographyVariant;
  /**
   * @description The width of the typography element
   * @default fit
   */
  width?: TypographyWidth;
  /**
   * @description The textTransform of the typography element
   * @default fit
   */
  transform?: ChakraTextProps["textTransform"];
  /**
   * @description The textWrap of the typography element
   * @default fit
   */
  wrap?: "wrap" | "nowrap" | "pretty" | "revert" | "initial" | "inherit";
  cssOverride?: object;
  title?: string;
  textAlign?: ChakraTextProps["textAlign"];
  fontSize?: ChakraTextProps["fontSize"];
  fontWeight?: ChakraTextProps["fontWeight"];
  lineHeight?: ChakraTextProps["lineHeight"];
  /**
   * @description The number of lines the text should be truncated to on different devices Chakra's Array Syntax
   */
  noOfLines?: number | number[];
  /**
   * @description The text shadow of the typography element
   * @default fit
   */
  textShadow?: string;
}
