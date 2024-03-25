import { ModalProps as ChakraModalProps } from "@chakra-ui/react";
import { MutableRefObject, ReactNode } from "react";
import { DesignSystemBaseProps } from "../../types/shared";
import { ButtonProps } from "../Button/ButtonProps";

export interface ModalProps extends ChakraModalProps, DesignSystemBaseProps {
  /**
   * @description The size of the modal. Default: md.
   */
  size?: "sm" | "md" | "lg" | "fit" | "full";
  /**
   * @description The header content
   */
  header?: ReactNode;
  /**
   * @description The body content
   */
  children: ReactNode;
  /**
   * @description If true, will scroll the footer with the content.
   */
  scrollFooter?: boolean;
  /**
   * @description The footer content buttons
   */
  footerButtons?: {
    variant: ButtonProps["variant"];
    label: string;
    onClick(): void;
    disabled?: boolean;
    isLoading?: boolean;
    children?: ReactNode;
  }[];
  /**
   * @description If true, will render a close button on the header of the modal.
   */
  closable?: boolean;
  /**
   * @description If passed, will render a back button on the header of the modal and call the passed callback when
   * clicked.
   */
  onGoBack?(): void;
  /**
   * @description Defines the space the modal will have vertically with the top and bottom of the page.
   * Default: maximum-margin
   * Values are 10rem for maximum margin and 2.5rem for minimum margin.
   */
  modalPositioning?: "maximum-margin" | "minimum-margin";
  /**
   * @description The direction of the footer buttons. Default: horizontal.
   */
  footerButtonsDirection?: "horizontal" | "vertical";
  modalBodyStyle?: object;
  headerRef?: MutableRefObject<HTMLDivElement | null>;
  shouldHaveTopPadding?: boolean;
  shouldHaveBackgroundOverlay?: boolean;
  shouldHaveBackgroundImage?: boolean;
}
