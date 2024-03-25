import { defineStyleConfig } from "@chakra-ui/react";

export const RadioGroup = defineStyleConfig({
  baseStyle: {},
  variants: {},
  sizes: {},
  defaultProps: {},
});

export const Radio = defineStyleConfig({
  baseStyle: {
    borderRadius: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "text-primary",
  },
  variants: {
    default: {
      borderColor: "neutral300",
      borderWidth: "1.5px",
      bgColor: "inter-secondary-default",
      _hover: {
        borderColor: "inter-primary-hover",
        bgColor: "inter-secondary-default",
      },
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "transparent",
        cursor: "not-allowed",
      },
    },
    error: {
      borderColor: "error-primary",
      borderWidth: "1.5px",
      bgColor: "inter-secondary-default",
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "inter-secondary-default",
        cursor: "not-allowed",
      },
    },
    "default-selected": {
      borderColor: "inter-primary-default",
      bgColor: "neutral50",
      _hover: {
        borderColor: "inter-primary-hover",
      },
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "transparent",
        cursor: "not-allowed",
      },
    },
    "error-selected": {
      borderColor: "error-primary",
      bgColor: "neutral50",
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "transparent",
        cursor: "not-allowed",
      },
    },
  },
  sizes: {
    md: {
      width: "1.25rem",
      height: "1.25rem",
      borderWidth: "5px",
    },
    sm: {
      width: "1rem",
      height: "1rem",
      borderWidth: "4px",
    },
  },
  defaultProps: {
    size: "md",
  },
});
