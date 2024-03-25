import { BaseButton } from "./BaseButton";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";

export type TertiaryButtonProps = Omit<ButtonProps, "rounded" | "variant">;
/**
 * @description A tertiary button should be used for an action that is not primary
 */
export const TertiaryButton: FC<TertiaryButtonProps> = (props) => {
  return <BaseButton variant="tertiary" {...props} />;
};
