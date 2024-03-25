import { DesignSystemBaseProps } from "../../types/shared";

export interface DividerProps extends DesignSystemBaseProps {
  /**
   * @description The divider variant
   * @default primary
   */
  variant?: "primary" | "secondary";
}
