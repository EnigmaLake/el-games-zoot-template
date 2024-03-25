import { defineStyleConfig } from "@chakra-ui/react";

// TO DO: We may be able to use chakra's built in custom theming (discovered after the original implementation).
// https://chakra-ui.com/docs/components/button/theming
// However, we can't right now because it would override the original button component pre-design system.
// Thus, we can only really do it when we've completely moved over to using the design system.
const primary = {
  bgColor: "inter-primary-default",
  color: "text-primary",
  borderRadius: "xxl",
  _hover: {
    bgColor: "inter-primary-hover",
  },
  _active: {
    bgColor: "inter-primary-default",
  },
  _disabled: {
    _hover: {
      bgColor: "inter-primary-default",
    },
  },
};

const secondary = {
  bgColor: "inter-secondary-default",
  color: "text-primary",
  _hover: {
    bgColor: "inter-secondary-hover",
  },
  _active: {
    bgColor: "inter-primary-default",
  },
  _disabled: {
    _hover: {
      bgColor: "inter-secondary-default",
    },
  },
};

const tertiary = {
  bgColor: "background-level-0",
  color: "text-primary",
  _hover: {
    bgColor: "inter-tertiary-hover",
  },
  _active: {
    bgColor: "inter-primary-default",
  },
  _disabled: {
    _hover: {
      bgColor: "background-level-0",
    },
  },
};

const ghost = {
  bgColor: "transparent",
  color: "text-primary",
  _hover: {
    bgColor: "inter-tertiary-hover",
  },
  _active: {
    bgColor: "inter-primary-default",
  },
  _disabled: {
    _hover: {
      bgColor: "transparent",
    },
  },
};

export const Button = defineStyleConfig({
  baseStyle: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
  variants: {
    primary,
    secondary,
    tertiary,
    success: {
      bgGradient:
        "linear-gradient(to right, #0DE83D 0%, #0DE83D  81%, rgba(0,23,16,0.45536)  100%)",
      bgColor: "#0DE83D",
      color: "text-primary",
      _hover: {
        bgColor: "#0DE83D",
      },
      _active: {
        bgColor:
          "linear-gradient(124deg, #0DE83D 7.62%, rgba(13, 232, 61, 0.00) 83.5%)",
      },
      _disabled: {
        _hover: {
          bgColor:
            "linear-gradient(124deg, #0DE83D 7.62%, rgba(13, 232, 61, 0.00) 83.5%)",
        },
      },
    },
    warning: {
      bgGradient:
        "linear-gradient(to right, #F9C611 0%, #F9C611  81%, rgba(0,23,16,0.45536)  100%)",
      bgColor: "#FACF56",
      color: "text-primary",
      _hover: {
        bgColor: "#FACF56",
      },
      _active: {
        bgColor:
          "linear-gradient(124deg, #FACF56 7.62%, rgba(13, 232, 61, 0.00) 83.5%)",
      },
      _disabled: {
        _hover: {
          bgColor:
            "linear-gradient(124deg, #FACF56 7.62%, rgba(13, 232, 61, 0.00) 83.5%)",
        },
      },
    },
    danger: {
      bgColor: "inter-danger-default",
      color: "text-primary",
      _hover: {
        bgColor: "inter-danger-hover",
      },
      _active: {
        bgColor: "inter-danger-default",
      },
      _disabled: {
        _hover: {
          bgColor: "inter-danger-default",
        },
      },
    },
    dark: {
      bgColor: "background-level-0",
      borderRadius: "xxl",
      color: "text-primary",
      _hover: {
        bgColor: "background-level-1",
      },
      _active: {
        bgColor: "background-level-2",
      },
      _disabled: {
        _hover: {
          bgColor: "background-level-0",
        },
      },
    },
  },
  sizes: {
    xs: {
      py: "0.25rem",
      px: "0.375rem",
    },
    sm: {
      py: "0.44rem",
      px: "0.75rem",
    },
    md: {
      py: "0.62rem",
      px: "1rem",
    },
    lg: {
      py: "0.88rem",
      px: "1.25rem",
    },
    xl: {
      py: "0.88rem",
      px: "1.5rem",
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export const IconButton = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    padding: 0,
  },
  variants: {
    primary,
    secondary,
    tertiary,
    ghost,
  },
  sizes: {
    xs: {
      height: "1.75rem",
      width: "1.75rem",
    },
    sm: {
      height: "2rem",
      width: "2rem",
    },
    md: {
      height: "2.5rem",
      minWidth: "2.5rem",
      width: "2.5rem",
    },
    lg: {
      height: "3rem",
      width: "3rem",
    },
    xl: {
      height: "3.5rem",
      width: "3.5rem",
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export const CloseButton = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    bgColor: "transparent",
    color: "icons-secondary",
    _hover: {
      bgColor: "rgba(255, 255, 255, 0.05)",
      color: "icons-primary",
    },
    _disabled: {
      bgColor: "transparent",
      color: "text-disabled",
    },
    padding: 0,
  },
  sizes: {
    sm: {
      height: "1.5rem",
      width: "1.5rem",
    },
    md: {
      height: "2rem",
      width: "2rem",
    },
    lg: {
      height: "2.5rem",
      width: "2.5rem",
    },
  },
  defaultProps: {
    size: "md",
  },
});
