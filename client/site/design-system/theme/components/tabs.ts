import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { Button } from "./button";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  indicator: {
    transitionDuration: "500ms !important",
  },
  tab: {
    ...Button.baseStyle,
    color: "text-secondary",
    _selected: {
      color: "text-primary",
    },
    _disabled: {
      color: "text-disabled",
    },
  },
  button: {
    ...Button.baseStyle,
    _hover: {
      backgroundColor: "transparent",
    },
    _active: {
      backgroundColor: "transparent",
    },
    _disabled: {
      _hover: {
        cursor: "not-allowed",
        backgroundColor: "transparent",
      },
    },
  },
});

const sizes = {
  sm: definePartsStyle({
    tab: {
      px: "0.75rem",
    },
  }),
  md: definePartsStyle({
    tab: {
      px: "1rem",
    },
  }),
  lg: definePartsStyle({
    tab: {
      px: "1.25rem",
    },
  }),
  xl: definePartsStyle({
    tab: {
      px: "1.5rem",
    },
  }),
};

export const Tabs = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
