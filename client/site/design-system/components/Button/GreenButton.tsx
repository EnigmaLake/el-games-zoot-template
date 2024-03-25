import { BaseButton } from "./BaseButton";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";

export type GreenProps = Omit<ButtonProps, "rounded" | "variant">;

/**
 * @description A Success button should be used to indicate an action with potentially hazardous consequences
 */
export const GreenButton: FC<GreenProps> = (props) => {
  return <BaseButton variant="success" {...props} />;
};
