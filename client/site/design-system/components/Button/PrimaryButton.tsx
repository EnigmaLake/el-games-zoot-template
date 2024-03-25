import { BaseButton } from "./BaseButton";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";

export type PrimaryButtonProps = Omit<ButtonProps, "rounded" | "variant">;

/**
 * @description A primary button should be used to indicate the main action a user should take.
 */
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return <BaseButton variant="primary" {...props} />;
};
