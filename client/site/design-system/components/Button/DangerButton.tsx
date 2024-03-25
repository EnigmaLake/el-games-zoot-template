import { BaseButton } from "./BaseButton";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";

export type DangerButtonProps = Omit<ButtonProps, "rounded" | "variant">;

/**
 * @description A danger button should be used to indicate an action with potentially hazardous consequences
 */
export const DangerButton: FC<DangerButtonProps> = (props) => {
  return <BaseButton variant="danger" {...props} />;
};
