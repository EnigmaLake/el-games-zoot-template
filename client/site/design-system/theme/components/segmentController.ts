import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    backgroundColor: "inter-secondary-default",
    _selected: {
      backgroundColor: "inter-secondary-hover",
    },
    _disabled: {
      opacity: 0.3,
      cursor: "not-allowed",
    },
    paddingX: 2,
    width: "full",
    whiteSpace: "nowrap",
  },
});

const sizes = {
  sm: definePartsStyle({
    tab: {
      height: "2rem",
    },
  }),
};

export const SegmentController = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "sm",
  },
});
