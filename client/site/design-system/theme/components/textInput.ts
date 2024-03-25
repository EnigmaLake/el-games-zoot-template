import { defineStyleConfig } from "@chakra-ui/react";

export const TextInputLight = defineStyleConfig({
  baseStyle: {
    backgroundColor: "transparent",
    bgGradient:
      "linear(to-b, rgba(245, 245, 245, 0.13) 4%, rgba(245, 245, 245, 0) 192.98%)",
    borderRadius: "md",
    borderColor: "#0C357373",
    paddingRight: "3rem", // Default padding right from chakra + 0.5rem
    _focus: {
      border: "interactions.primary",
    },
    _hover: {
      borderColor: "neutral200",
    },
    _focusVisible: {
      outlineColor: "interactions.primary",
      boxShadow: "none",
    },
    _disabled: {
      borderColor: "transparent",
      cursor: "not-allowed",
      _hover: {
        borderColor: "transparent",
      },
      _invalid: {
        borderColor: "error-primary",
      },
      _placeholder: {
        color: "neutral200",
        fontWeight: 400,
        fontSize: "base",
      },
    },
    _invalid: {
      borderColor: "error-primary",
    },
    _placeholder: {
      color: "neutral200",
    },
  },
  sizes: {
    lg: {
      height: "3rem",
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: "1.75rem",
      letterSpacing: "0px",
    },
    md: {
      height: "2.5rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    sm: {
      height: "2rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    xs: {
      height: "1.375rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.0075px",
    },
  },
  defaultProps: {
    size: "md",
  },
});

export const TextInput = defineStyleConfig({
  baseStyle: {
    backgroundColor: "transparent",
    bgGradient: "linear(to-b, #0C357331, #0C1F3A8C)",
    borderRadius: "md",
    borderColor: "#122D5614",
    paddingRight: "3rem", // Default padding right from chakra + 0.5rem
    _focus: {
      border: "interactions.primary",
    },
    _hover: {
      borderColor: "neutral200",
    },
    _focusVisible: {
      outlineColor: "interactions.primary",
      boxShadow: "none",
    },
    _disabled: {
      borderColor: "transparent",
      cursor: "not-allowed",
      _hover: {
        borderColor: "transparent",
      },
      _invalid: {
        borderColor: "error-primary",
      },
      _placeholder: {
        color: "neutral200",
        fontWeight: 400,
        fontSize: "base",
      },
    },
    _invalid: {
      borderColor: "error-primary",
    },
    _placeholder: {
      color: "white",
    },
  },
  sizes: {
    lg: {
      height: "3rem",
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: "1.75rem",
      letterSpacing: "0px",
    },
    md: {
      height: "2.5rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    sm: {
      height: "2rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.12px",
    },
    xs: {
      height: "1.375rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.0075px",
    },
  },
  defaultProps: {
    size: "md",
  },
});
