import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    backgroundColor: "background-level-2",
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "transparent",
    textAlign: "left",
    _focus: {
      borderColor: "inter-primary-default",
    },
    _active: {
      borderColor: "inter-primary-default",
    },
    _hover: {
      borderColor: "inter-primary-default",
    },
    _disabled: {
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
  },
  list: {
    borderWidth: "1px",
    borderColor: "border-primary",
    borderStyle: "solid",
    borderRadis: "md",
    padding: 0,
    shadow: "md",
    backgroundColor: "background-level-1",
  },
  item: {
    backgroundColor: "background-level-2",
    _hover: {
      backgroundColor: "inter-secondary-hover",
    },
    _focus: {
      backgroundColor: "background-level-2",
    },
    padding: 3,
    margin: 0,
    borderRadius: 0,
  },
  nonClickableItem: {
    backgroundColor: "inter-secondary-hover",
    padding: 3,
    margin: 0,
    borderRadius: 0,
  },
});

const lg = {
  height: "3rem",
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: "1.75rem",
  letterSpacing: "0px",
};
const md = {
  height: "2.5rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "1.25rem",
  letterSpacing: "0.12px",
};
const sm = {
  height: "2rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "1.25rem",
  letterSpacing: "0.12px",
};

const sizes = {
  // apply custom styles to parts
  lg: definePartsStyle({ button: lg, item: lg }),
  md: definePartsStyle({ button: md, item: md }),
  sm: definePartsStyle({ button: sm, item: sm }),
};

const variants = {
  default: {},
  error: {
    button: {
      borderColor: "error-primary",
      _hover: {
        borderColor: "error-primary",
      },
      _active: {
        borderColor: "error-primary",
      },
      _focus: {
        borderColor: "error-primary",
      },
    },
  },
};

export const Dropdown = defineMultiStyleConfig({ baseStyle, sizes, variants });
