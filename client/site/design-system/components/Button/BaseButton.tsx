import type { FC } from "react";
import { cloneElement } from "react";
import { Button as ChakraButton, useStyleConfig } from "@chakra-ui/react";
import { Text } from "../Typography/Text";
import type { TypographyVariant } from "../Typography/TextProps";
import type { ButtonProps } from "./ButtonProps";

export const BaseButton: FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    width = "fit-content",
    disabled,
    leftIcon,
    rightIcon,
    size = "md",
    loading = false,
    variant,
    textColor,
    justifyContent,
    callout,
    borderRadius,
    ...rest
  } = props;

  const styles = useStyleConfig("ButtonV2", { variant, size });

  let iconSize;
  let typographyVariant: TypographyVariant;
  switch (size) {
    case "xs":
      typographyVariant = callout ? "small-callout" : "small";
      iconSize = 4;
      break;
    case "sm":
      typographyVariant = "small-callout";
      iconSize = 4;
      break;
    case "xl":
      typographyVariant = "large-callout";
      iconSize = 6;
      break;
    case "lg":
      iconSize = 5;
      typographyVariant = "base-callout";
      break;
    case "md":
    default:
      typographyVariant = "base-callout";
      iconSize = 4;
      break;
  }

  return (
    <ChakraButton
      sx={styles}
      variant="solid"
      width={width}
      onClick={onClick}
      isDisabled={disabled}
      leftIcon={leftIcon && cloneElement(leftIcon, { boxSize: iconSize })}
      rightIcon={rightIcon && cloneElement(rightIcon, { boxSize: iconSize })}
      isLoading={loading}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      {...rest}
    >
      <Text variant={typographyVariant} color={textColor} align="center">
        {children}
      </Text>
    </ChakraButton>
  );
};
