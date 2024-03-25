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
  let textPadding;
  let typographyVariant: TypographyVariant;
  switch (size) {
    case "xs":
      typographyVariant = callout ? "small-callout" : "small";
      iconSize = 4;
      textPadding = "0.5rem";
      break;
    case "sm":
      typographyVariant = "small-callout";
      iconSize = 4;
      textPadding = "1rem";
      break;
    case "xl":
      typographyVariant = "large-callout";
      iconSize = 6;
      textPadding = "3rem";
      break;
    case "lg":
      iconSize = 5;
      typographyVariant = "base-callout";
      textPadding = "2.5rem";
      break;
    case "md":
    default:
      typographyVariant = "base-callout";
      iconSize = 4;
      textPadding = "2rem";
      break;
  }

  return (
    <ChakraButton
      sx={styles}
      variant="solid"
      w={width}
      onClick={onClick}
      isDisabled={disabled}
      leftIcon={leftIcon && cloneElement(leftIcon, { boxSize: iconSize })}
      rightIcon={rightIcon && cloneElement(rightIcon, { boxSize: iconSize })}
      isLoading={loading}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      {...rest}
    >
      <Text
        variant={typographyVariant}
        color={textColor}
        align="center"
        px={textPadding}
      >
        {children}
      </Text>
    </ChakraButton>
  );
};
