import { DesignSystemBaseProps, Size } from "../../types/shared";

export interface AvatarProps extends DesignSystemBaseProps {
  /**
   * @description The image source
   */
  src: string;
  /**
   * @description Alt text for the image
   */
  alt: string;
  /**
   * @description The size of the button
   * @default md
   */
  size?: Extract<Size, "xl" | "lg" | "md" | "sm" | "xs">;
  /**
   * @description The callback for when the avatar is clicked. Also wraps it in a button
   */
  onClick?: () => void;
}
