import { defineStyleConfig } from "@chakra-ui/react";

export const CheckboxGroup = defineStyleConfig({
  baseStyle: {},
  variants: {},
  sizes: {},
  defaultProps: {},
});

export const Checkbox = defineStyleConfig({
  baseStyle: {
    borderWidth: "1.5px",
    borderRadius: "base",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    default: {
      borderColor: "neutral300",
      bgColor: "inter-secondary-default",
      _hover: {
        borderColor: "inter-primary-hover",
        bgColor: "inter-secondary-default",
      },
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "inter-secondary-default",
        cursor: "not-allowed",
      },
    },
    error: {
      borderColor: "error-primary",
      bgColor: "inter-secondary-default",
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "inter-secondary-default",
        cursor: "not-allowed",
      },
    },
    "default-selected": {
      borderColor: "inter-primary-default",
      bgColor: "inter-primary-default",
      _hover: {
        borderColor: "inter-primary-hover",
        bgColor: "inter-primary-hover",
      },
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "icons-disabled",
        cursor: "not-allowed",
      },
    },
    "error-selected": {
      borderColor: "error-primary",
      bgColor: "error-primary",
      _disabled: {
        borderColor: "icons-disabled",
        bgColor: "icons-disabled",
        cursor: "not-allowed",
      },
    },
  },
  sizes: {
    md: {
      width: "1.25rem",
      height: "1.25rem",
    },
    sm: {
      width: "1rem",
      height: "1rem",
    },
  },
  defaultProps: {
    size: "md",
  },
});
