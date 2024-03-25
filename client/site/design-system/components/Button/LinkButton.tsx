import { Button as ChakraButton } from "@chakra-ui/react";
import { cloneElement } from "react";
import type { FC } from "react";
import type { ButtonProps } from "./ButtonProps";
import { Text } from "../Typography/Text";
import type { Size } from "../../types/shared";
import { TypographyVariant } from "../Typography/TextProps";

export interface LinkButtonProps
  extends Omit<ButtonProps, "rounded" | "variant" | "size" | "textColor"> {
  size?: Extract<Size, "xs" | "sm" | "md">;
  variant?: "primary" | "secondary" | "tertiary";
}
/**
 * @description A button styled as a link. It should not be used for page navigation, and is therefore not compatible with next/link
 */
export const LinkButton: FC<LinkButtonProps> = (props) => {
  const {
    children,
    onClick,
    width = "fit",
    disabled,
    leftIcon,
    rightIcon,
    size = "md",
    loading = false,
    variant = "primary",
    ...rest
  } = props;

  let iconSize;
  let typographyVariant: TypographyVariant;
  let iconSpacing;
  switch (size) {
    case "xs":
      typographyVariant = "footnote";
      iconSize = 3.5;
      iconSpacing = 1;
      break;
    case "sm":
      typographyVariant = "small";
      iconSize = 4;
      iconSpacing = 1;
      break;
    case "md":
    default:
      typographyVariant = "base";
      iconSize = 5;
      iconSpacing = 1.5;
      break;
  }

  let textColor;
  switch (variant) {
    case "secondary":
      textColor = "text-primary";
      break;
    case "tertiary":
      textColor = "text-secondary";
      break;
    case "primary":
    default:
      textColor = "inter-primary-default";
      break;
  }

  return (
    <ChakraButton
      bgColor="transparent"
      padding={0}
      height="min-content"
      _hover={{
        textDecoration: "underline",
      }}
      _focus={{
        bgColor: "transparent",
      }}
      _active={{
        bgColor: "transparent",
      }}
      _disabled={{
        cursor: "not-allowed",
        opacity: 0.5,
        _hover: {
          textDecoration: "none",
        },
      }}
      color={textColor}
      w={width === "full" ? "full" : "fit-content"}
      onClick={onClick}
      disabled={disabled}
      leftIcon={leftIcon && cloneElement(leftIcon, { boxSize: iconSize })}
      rightIcon={rightIcon && cloneElement(rightIcon, { boxSize: iconSize })}
      isLoading={loading}
      iconSpacing={iconSpacing}
      {...rest}
    >
      <Text variant={typographyVariant} color={textColor}>
        {children}
      </Text>
    </ChakraButton>
  );
};
