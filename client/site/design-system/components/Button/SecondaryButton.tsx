import { BaseButton } from "./BaseButton";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";

export type SecondaryButtonProps = Omit<ButtonProps, "rounded" | "variant">;

interface Ths extends SecondaryButtonProps {
  borderRightRadius?: string | number;
}

/**
 * @description A secondary button should be used for an action that is not primary
 */
export const SecondaryButton: FC<Ths> = (props) => {
  return <BaseButton variant="secondary" {...props} />;
};
