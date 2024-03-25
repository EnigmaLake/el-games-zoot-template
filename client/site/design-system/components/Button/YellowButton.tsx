import { BaseButton } from "./BaseButton";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";

export type YellowProps = Omit<ButtonProps, "rounded" | "variant">;

/**
 * @description A Success button should be used to indicate an action with potentially hazardous consequences
 */
export const YellowButton: FC<YellowProps> = (props) => {
  return <BaseButton variant="warning" {...props} />;
};
