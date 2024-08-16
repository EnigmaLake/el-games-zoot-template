import { defineStyleConfig } from "@chakra-ui/react";

export const NumberInput = defineStyleConfig({
  baseStyle: {
    textAlign: "center",
    borderColor: "transparent",
    backgroundColor: "background-level-2",
    _focus: {
      borderColor: "transparent",
    },
    _hover: {
      borderColor: "transparent",
    },
    _focusVisible: {
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
        color: "text-disabled",
      },
    },
    _invalid: {
      borderColor: "error-primary",
    },
    _placeholder: {
      color: "text-tertiary",
    },
    paddingInlineStart: 3,
    paddingInlineEnd: 2,
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

// this is to override the default button styles that comes with
// the chakra button definition
export const NumberInputButton = defineStyleConfig({
  baseStyle: {
    backgroundColor: "inter-secondary-default",
    borderRadius: "0px",
    _hover: {
      backgroundColor: "inter-secondary-hover",
    },
    _focus: {
      backgroundColor: "inter-secondary-hover",
    },
    height: "auto",
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    _first: {
      borderLeftRadius: "xxl",
    },
    _last: {
      borderRightRadius: "xxl",
    },
  },
  sizes: {
    sm: {
      px: 1.5,
      py: 1.5,
    },
    md: {
      px: 2.5,
      py: 2.5,
    },
    lg: {
      px: 3,
      py: 3,
    },
  },
});

export const baseNumberInputStyle = {
  container: {
    // backgroundColor: "background-level-2",
    borderRadius: "0",
    borderColor: "transparent",
    borderWidth: "1px",
    _focus: {
      borderRadius: "0",
      borderColor: "inter-primary-default",
    },
    _focusWithin: {
      borderRadius: "0",
      borderColor: "inter-primary-default",
    },
    _focusVisible: {
      boxShadow: "none",
    },
    _disabled: {
      borderWidth: "1px",
      // backgroundColor: "background-level-2",
      borderRadius: "0",
      borderColor: "transparent",
      cursor: "not-allowed",
      color: "text-disabled",
      _hover: {
        borderColor: "transparent",
      },
      _invalid: {
        borderColor: "error-primary",
      },
    },
    _invalid: {
      borderWidth: "1px",
      // backgroundColor: "background-level-2",
      borderRadius: "0",
      borderColor: "error-primary",
    },
    _placeholder: {
      color: "text-tertiary",
    },
  },
};
