import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { BadgeProps } from "./BadgeProps";
import { Text } from "../Typography/Text";
import colors from "../../theme/base/colors";
import { CloseButton } from "../Button/CloseButton";
import { TypographyVariant } from "../Typography/TextProps";

const getTextVariant = (size: string) => {
  switch (size) {
    case "xs":
      return "footnote-bold";
    case "sm":
      return "small-callout";
    case "md":
      return "base";
    case "lg":
      return "large";
  }
};

const getBadgeColors = (
  variant: "primary" | "highlighted" | "success" | "warning" | "error"
) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: colors["background-level-3"],
        textColor: colors["text-primary"],
      };
    case "highlighted":
      return {
        backgroundColor: colors["inter-primary-default"],
        textColor: colors["text-primary"],
      };
    case "success":
      return {
        backgroundColor: colors["success-background"],
        textColor: colors["success-primary"],
      };
    case "warning":
      return {
        backgroundColor: colors["warning-background"],
        textColor: colors["warning-primary"],
      };
    case "error":
      return {
        backgroundColor: colors["error-background"],
        textColor: colors["error-primary"],
      };
  }
};

export const Badge: FC<BadgeProps> = (props) => {
  const { size = "sm", children, variant = "primary", onClose } = props;

  const textVariant: TypographyVariant | undefined = getTextVariant(size);
  const { backgroundColor, textColor } = getBadgeColors(variant);

  return (
    <Flex
      px={2}
      gap={2}
      py={0.5}
      paddingX={2}
      paddingY={0.5}
      cursor="default"
      borderRadius={24}
      alignItems="center"
      justifyContent="center"
      backgroundColor={backgroundColor}
    >
      <Text variant={textVariant} color={textColor} wrap="nowrap">
        {children}
      </Text>
      {onClose && <CloseButton size={size} onClick={onClose} />}
    </Flex>
  );
};
