import { Tag } from "@chakra-ui/react";
import { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import { BaseButton } from "./BaseButton";
import type { Size } from "../../types/shared";

export interface FloatingButtonProps
  extends Omit<ButtonProps, "rightIcon" | "secondary" | "size" | "variant"> {
  quantity: number;
  size?: Extract<Size, "sm" | "md" | "lg" | "xl">;
}

const QuantityTag = ({ quantity }: { quantity: number }) => {
  return (
    <Tag
      ml={2}
      bgColor="inter-primary-default"
      py="0.5"
      px="2"
      borderRadius="full"
    >
      {quantity}
    </Tag>
  );
};
export const FloatingButton: FC<FloatingButtonProps> = (props) => {
  const { quantity, children, ...rest } = props;
  return (
    <BaseButton
      {...rest}
      variant="secondary"
      rightIcon={<QuantityTag quantity={quantity} />}
    >
      {children}
    </BaseButton>
  );
};
