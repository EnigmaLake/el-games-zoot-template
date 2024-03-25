import { cloneElement } from "react";
import {
  Button as ChakraButton,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import type { UseTabProps, SystemProps } from "@chakra-ui/react";
import type { FC } from "react";
import { Text } from "../Typography/Text";
import type { TypographyVariant } from "../Typography/TextProps";
import type { ButtonProps } from "../Button/ButtonProps";

interface TabButtonProps
  extends Omit<ButtonProps, "onClick" | "justifyContent"> {
  cssOverrides: SystemStyleObject;
  justifyContent?: string;
}

/**
 * A copy of BaseButton, using __css instead of sx
 */
export const TabButton: FC<
  TabButtonProps &
    Omit<UseTabProps, "ref"> &
    Pick<SystemProps, "_hover" | "_active" | "_disabled">
> = (props) => {
  const {
    children,
    onClick,
    width = "fit",
    disabled,
    leftIcon,
    rightIcon,
    size = "md",
    loading = false,
    variant,
    textColor,
    justifyContent,
    cssOverrides,
    ...rest
  } = props;

  const styles = useMultiStyleConfig("Tabs", props);

  let iconSize;
  let typographyVariant: TypographyVariant;
  switch (size) {
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
      __css={{ ...styles.button, ...cssOverrides }} // `sx` has the highest priority, so we cannot override values from sx via props. we can with __css
      variant="solid"
      w={width === "full" ? "full" : "fit-content"}
      onClick={onClick}
      disabled={disabled}
      leftIcon={leftIcon && cloneElement(leftIcon, { boxSize: iconSize })}
      rightIcon={rightIcon && cloneElement(rightIcon, { boxSize: iconSize })}
      isLoading={loading}
      justifyContent={justifyContent}
      color={textColor}
      whiteSpace="nowrap"
      {...rest}
    >
      <Text variant={typographyVariant} color={textColor}>
        {children}
      </Text>
    </ChakraButton>
  );
};
