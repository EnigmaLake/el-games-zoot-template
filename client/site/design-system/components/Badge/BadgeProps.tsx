import { DesignSystemBaseProps, Size } from "../../types/shared";

export interface BadgeProps extends DesignSystemBaseProps {
  /**
   * @description The size of the badge
   * @default sm
   */
  size?: Extract<Size, "lg" | "md" | "sm" | "xs">;

  /**
   * @description The text inside the badge
   */
  children: string;

  /**
   * @description The variant of the badge
   * @default primary
   */
  variant?: "primary" | "highlighted" | "success" | "warning" | "error";

  /**
   * @description The method called when X is clicked
   */
  onClose?: () => void;
}
