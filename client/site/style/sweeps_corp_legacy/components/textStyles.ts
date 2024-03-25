import { StyleObjectOrFn } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const TextStyle = {
  // style object for base or default style
  baseStyle: (props: Dict): StyleObjectOrFn => {
    return {
      color: mode("grayscale.00", "grayscale.white")(props),
    };
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    xxxs: {
      fontSize: 9,
    },
    xxs: {
      lineHeight: "4",
      fontSize: "xxs",
    },
    xs: {
      lineHeight: "4.5",
      fontSize: "xs",
    },
    sm: {
      lineHeight: "5",
      fontSize: "sm",
    },
    base: {
      lineHeight: "6",
      fontSize: "base",
    },
    md: {
      lineHeight: "7.5",
      fontSize: "md",
    },
    lg: {
      lineHeight: "8",
      fontSize: "lg",
      letterSpacing: "xtighter",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    description: {
      lineHeight: "4",
      fontSize: "xxs",
      letterSpacing: "wider",
      color: "brand.neutral400",
    },
    base: {
      lineHeight: "6",
      fontSize: "base",
      color: "grayscale.white",
    },
    smallHeader: {
      textTransform: "uppercase",
      color: "brand.neutral400",
      fontSize: "xxs",
      fontWeight: 500,
    },
    smallStat: {
      fontWeight: 500,
      cursor: "pointer",
      fontSize: "sm",
      color: "grayscale.white",
    },
    deemphasized: {
      color: "grayscale.03",
    },
    statHeader: {
      fontSize: "xs",
      fontWeight: "500",
      color: "brand.neutral300",
    },
    inventoryStatHeader: {
      fontSize: "xxs",
      fontWeight: 500,
      color: "brand.neutral300",
      textTransform: "uppercase",
      letterSpacing: "wider",
    },
    inventoryStatHeaderMobile: {
      fontSize: "sm",
      fontWeight: 600,
      color: "typography.secondary",
      letterSpacing: "little",
      lineHeight: 5,
    },
    homepageTitle: {
      fontWeight: "bold",
      fontSize: {
        base: "2base",
        sm: "lg",
        lg: "xl",
      },
      whiteSpace: "nowrap",
      mb: {
        base: 1.5,
        md: 7,
      },
      lineHeight: 10,
    },
    latestAdditionsTitle: {
      fontWeight: "bold",
      mr: 5,
      fontSize: {
        base: "2base",
        sm: "lg",
        lg: "xl",
      },
      whiteSpace: "nowrap",
      mb: {
        base: 1.5,
        md: 7,
      },
      lineHeight: 10,
    },
    latestAdditionsLink: {
      float: "right",
      fontWeight: "normal",
      fontSize: 18,
      whiteSpace: "nowrap",
      mb: {
        base: 1.5,
        md: 7,
      },
      lineHeight: 10,
    },
    termsAndConditionTitle: {
      fontFamily: "Inter",
      fontSize: "2.5rem",
      fontWeight: "800",
      lineHeight: "3.5rem",
      letterSpacing: "-0.0125rem",
      textAlign: "center",
    },
    termsAndConditionsSectionHeader: {
      fontFamily: "Inter",
      fontSize: "1.375rem",
      fontWeight: "600",
      lineHeight: "1.75rem",
      letterSpacing: "0em",
      textAlign: "left",
      paddingTop: 10,
    },
    termsAndConditionsBody: {
      fontFamily: "Inter",
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.0075rem",
      textAlign: "left",
    },
    display2: {
      fontFamily: "Inter",
      fontSize: {
        base: "2.25rem",
        md: "3rem",
      },
      lineHeight: "4rem",
      letterSpacing: "-0.015rem",
      textAlign: "left",
      fontWeight: "600",
    },
    display3: {
      fontFamily: "Inter",
      fontSize: {
        base: "2rem",
        md: "2.5rem",
      },
      lineHeight: "3.5rem",
      letterSpacing: "-0.013rem",
      fontWeight: "600",
    },
    display6: {
      fontFamily: "Inter",
      fontSize: {
        base: "1.375rem",
        md: "1.5rem",
      },
      lineHeight: "2.5rem",
      letterSpacing: "-0.004rem",
      textAlign: "left",
    },
    keyPillarLabel: {
      fontFamily: "Inter",
      fontSize: {
        base: "1rem",
        md: "1.25rem",
      },
      lineHeight: "1.5rem",
      letterSpacing: "-.04rem",
      textTransform: "uppercase",
      color: "typography.secondary",
    },
    keyPillarDescription: {
      fontFamily: "Inter",
      fontSize: {
        base: "1.1rem",
        md: "1.25rem",
      },
      lineHeight: "1.875rem",
      fontWeight: "400",
    },
    calloutSmall: {
      fontFamily: "Inter",
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
      fontWeight: "600",
      textAlign: "center",
      letterSpacing: "0.04rem",
    },
    "label.base": {
      letterSpacing: "0.008rem",
      fontSize: "base",
      color: "grayscale.white",
      lineHeight: "1.25rem",
      fontWeight: "400",
    },
    footnote: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: "400",
      color: "neutrals.neutral200",
      letterSpacing: "0.02rem",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};

export default TextStyle;
