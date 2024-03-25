const ButtonStyle = {
  baseStyle: {
    borderRadius: "smBase",
    fontWeight: "medium",
    _focus: {
      boxShadow: "none",
      // Remove the blue box flashing on tap
      WebkitTapHighlightColor: "transparent",
    },
  },
  sizes: {
    xs: {
      fontSize: "xs",
      lineHeight: 1, // 16px
      px: 2.5, // 10px
      py: 1, // 4px
      h: 6.5, // 26px
    },
    sm: {
      fontSize: "sm",
      lineHeight: 1.25, // 20px
      px: 3, // 12px
      py: 1.5, // 6px
      h: 8, // 32px
    },
    base: {
      fontSize: "base",
      lineHeight: 1.5, // 24px
      px: 4, // 16px
      py: 2, // 8px
      h: 10, // 40px
    },
    md: {
      fontSize: "md",
      lineHeight: 1.75, // 28px
      px: 5, // 20px
      py: 2.5, // 10px
      h: 12, // 48px
    },
    lg: {
      fontSize: "md",
      lineHeight: 2, // 32px
      px: 6, // 24px
      py: 4, // 16px
      h: 14, // 56px
    },
  },
  variants: {
    primary: {
      bgColor: "interactions.primary",
      color: "grayscale.white",
      _focus: {
        bgColor: "interactions.hover",
      },
      _hover: {
        bgColor: "interactions.hover",
        _disabled: {
          bgColor: "interactions.secondary",
        },
      },
      _disabled: {
        bgColor: "interactions.secondary",
      },
    },
    secondary: {
      bgColor: "greys.grey700",
      color: "grayscale.white",
      _focus: {
        bgColor: "greys.grey600",
      },
      _hover: {
        bgColor: "greys.grey600",
        _disabled: {
          bgColor: "greys.grey700",
        },
      },
      _disabled: {
        bgColor: "greys.grey700",
      },
    },
    ghost: {
      bgColor: "transparent",
      color: "grayscale.white",
      _focus: {
        bgColor: "transparent",
      },
      _hover: {
        bgColor: "transparent",
        _disabled: {
          bgColor: "transparent",
        },
      },
      _disabled: {
        bgColor: "transparent",
      },
    },
    danger: {
      bgColor: "danger.primary",
      color: "grayscale.white",
      _focus: {
        bgColor: "danger.hover",
      },
      _hover: {
        bgColor: "danger.hover",
        _disabled: {
          bgColor: "danger.hover",
        },
      },
      _disabled: {
        bgColor: "danger.hover",
      },
    },
    clearAll: {
      bgColor: "transparent",
      fontSize: "sm",
      fontWeight: 700,
      color: "greys.grey300",
      letterSpacing: "wide",
      _hover: {
        bgColor: "transparent",
        color: "greys.grey200",
      },
    },
    qualitySelector: {
      borderWidth: 1,
      borderColor: "brand.gray700",
      color: "greys.grey200",
      borderRadius: "full",
      letterSpacing: "minimum",
      px: 3, // 12px
      py: 2.5, // 10px
      _active: {
        bgColor: "brand.gray700",
        borderColor: "brand.gray600",
        cursor: "default",
        color: "grayscale.white",
      },
      _hover: {
        bgColor: "greys.grey700",
        borderColor: "greys.grey700",
      },
      _focus: {
        bgColor: "greys.grey600",
      },
    },
    currencySelector: {
      borderWidth: 1,
      borderColor: "greys.grey600",
      minW: "max-content",
      cursor: "pointer",
      borderRadius: "sm",
      px: "0.594rem", // 9px
      fontSize: "xs",
      letterSpacing: "little",
    },
    statSelector: {
      borderRadius: "full",
      bgColor: "greys.grey700",
      fontSize: "sm",
      _hover: {
        backgroundColor: "whiteAlpha.300",
      },
    },
    chartSpecSelector: {
      position: "initial",
      color: "greys.grey300",
      pt: 1.5,
      pb: {
        base: 1.5,
        md: 1,
      },
      px: {
        base: 3,
        md: 0,
      },
      minW: {
        base: 12.5,
        md: 7.5,
      },
      letterSpacing: {
        base: "little",
        md: "widest",
      },
      lineHeight: 5,
      fontWeight: 500,
      fontSize: {
        base: "sm",
        md: "xs",
      },
      borderRadius: {
        base: "sm",
        md: 0,
      },
      _active: {
        color: "greys.grey50",
        borderBottomColor: "greys.grey50",
        borderBottomWidth: {
          base: 0,
          md: 1,
        },
        bgColor: {
          base: "greys.grey600",
          md: "transparent",
        },
      },
      _hover: {
        color: "greys.grey400",
        _active: {
          color: "greys.grey50",
        },
      },
    },
  },
  defaultProps: {
    variant: "secondary",
    size: "base",
  },
};

export default ButtonStyle;
