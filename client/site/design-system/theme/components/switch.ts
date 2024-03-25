import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// Chakra's suggestion on how to customize the Switch component https://chakra-ui.com/docs/components/switch/theming
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bgColor: "icons-primary",
  },
  track: {
    bgColor: "neutrals500",
    _checked: {
      bgColor: "inter-primary-default",
    },
    display: "flex",
    alignItems: "center",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

function getTransformValue(
  trackWidth: string,
  thumbWidth: string,
  distanceToEdge: string
) {
  return `translateX(calc(${trackWidth} - ${thumbWidth} - ${distanceToEdge}))`;
}

export const Switch = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    sm: {
      track: {
        height: "1rem",
        width: "1.75rem",
      },
      thumb: {
        height: "0.625rem",
        width: "0.625rem",
        transform: "translateX(0.1875rem)",
        _checked: {
          transform: getTransformValue("1.75rem", "0.625rem", "0.1875rem"),
        },
      },
    },
    md: {
      track: {
        height: "1.5rem",
        width: "2.5rem",
      },
      thumb: {
        height: "1rem",
        width: "1rem",
        transform: "translateX(0.25rem)",
        _checked: {
          transform: getTransformValue("2.5rem", "1rem", "0.25rem"),
        },
      },
    },
    lg: {
      track: {
        height: "1.75rem",
        width: "3rem",
      },
      thumb: {
        height: "1.25rem",
        width: "1.25rem",
        transform: "translateX(0.25rem)",
        _checked: {
          transform: getTransformValue("3rem", "1.25rem", "0.25rem"),
        },
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});
