import { Colors } from "@chakra-ui/react";

// DO NOT USE THIS FILE AS INSPIRATION. IT SHOULD BE COMPLETELY DEPRECATED.
export const blues = {
  blue900: "#092951",
  blue700: "#135098",
  blue600: "#1965BF",
  blue500: "#1E7AE6",
  blue300: "#549AEC",
} as const;

export const reds = {
  red900: "#3B232F",
  red700: "#964141",
  red600: "#C7514B",
  red300: "#FA877E",
} as const;

export const yellows = {
  yellow900: "#3B302E",
  yellow800: "#5E5535",
  yellow700: "#8C763E",
  yellow300: "#EDCB79",
};

export const greens = {
  green900: "#0E3C3A",
  green300: "#64D8A1",
};

const greys = {
  grey900: "#031124",
  grey800: "#061932",
  grey700: "#0B203D",
  grey600: "#1E3352",
  grey500: "#324667",
  grey400: "#4E617F",
  grey300: "#677C95",
  grey200: "#8199B4",
  grey100: "#BFCBDA",
  grey50: "#F3F3F3",
} as const;

const neutrals = {
  neutral200: "#8196B4",
  neutral700: "#122745",
  neutral600: "#1E3352",
} as const;

export const UIColors: Record<string, Colors> = {
  interactions: {
    hover: blues.blue600,
    primary: blues.blue500,
    secondary: blues.blue700,
    tertiary: blues.blue900,
  },
  danger: {
    hover: reds.red700,
    primary: reds.red600,
  },
  greys,
  _background: {
    bgSolidL0: greys.grey900,
    bgSolidL1: greys.grey800,
    bgSolidL2: neutrals.neutral700,
    bgTransparent01: `${greys.grey900}A6`, // grey900 @ 0.65
    bgTransparent02: `${greys.grey900}66`, // grey900 @ 0.40
    bgTransparent03: `${greys.grey900}33`, // grey900 @ 0.20
    bgGradient: `linear-gradient(to bottom, ${greys.grey900} 100%, ${greys.grey900} 0%)`, // grey900 @ 1.00-0.00
    footer: "#00000080",
  },
  icon: {
    disabled: greys.grey500,
    secondary: greys.grey300,
    primary: greys.grey50,
  },
  typography: {
    disabled: greys.grey500,
    tertiary: greys.grey300,
    secondary: greys.grey200,
    primary: greys.grey50,
  },
  divider: {
    divider01: greys.grey700,
    divider02: greys.grey600,
  },
  error: {
    bg: reds.red900,
    primary: reds.red300,
  },
  warning: {
    bg: yellows.yellow900,
    primary: yellows.yellow300,
  },
  success: {
    bg: greens.green900,
    primary: greens.green300,
  },
  neutrals,
  gradients: {
    conic: {
      brandColors:
        "conic-gradient(from 180deg at 50% 50%, #FFDC88 0deg, #D28AFE 90deg, #6598FF 180deg, #75DEFF 270deg, #FFDC88 360deg)",
      brandColors_80:
        "conic-gradient(from 180deg at 50% 50%, #FFDC88CC 0deg, #D28AFECC 90deg, #6598FFCC 180deg, #75DEFFCC 270deg, #FFDC88CC 360deg)",
      brandColors_15:
        "conic-gradient(from 180deg at 50% 50%, #FFDC8826 0deg, #D28AFE26 90deg, #6598FF26 180deg, #75DEFF26 270deg, #FFDC8826 360deg)",
    },
    linear: {
      brandColors:
        "linear-gradient(90deg, #D28AFE 0%, #6598FF 34.75%, #75DEFF 66.25%, #FFDC88 100%)",
      brandColors_80:
        "linear-gradient(90deg, #D28AFECC 0%, #6598FFCC 34.75%, #75DEFFCC 66.25%, #FFDC88CC 100%)",
      brandColors_15:
        "linear-gradient(90deg, #D28AFE26 0%, #6598FF26 34.75%, #75DEFF26 66.25%, #FFDC8826 100%)",
      brandColors_reverse:
        "linear-gradient(270deg, #D28AFE 0%, #6598FF 34.75%, #75DEFF 66.25%, #FFDC88 100%)",
      brandColors_80_reverse:
        "linear-gradient(270deg, #D28AFECC 0%, #6598FFCC 34.75%, #75DEFFCC 66.25%, #FFDC88CC 100%)",
      brandColors_15_reverse:
        "linear-gradient(270deg, #D28AFE26 0%, #6598FF26 34.75%, #75DEFF26 66.25%, #FFDC8826 100%)",
      aboutRowOdd:
        "linear-gradient(45deg, rgba(65, 53, 101, 0.7) 0%, rgba(37, 78, 102, 0.7) 100%)",
    },
  },
};

export const MiscColors: Record<string, Colors> = {
  currencies: {
    eth: "#CBA9F6",
    weth: "#CBA9F6",
    gods: "#F3DBA3",
    usdc: "#6FAAEF",
    imx: "#87DFF1",
    omi: "#F6978F",
    gog: "#BFCBDA",
    cmt: "#db9718",
    matic: "#8F5AE8",
  },
  priceTrend: {
    crashing: reds.red300,
    dropping: "#DE7CCF", // Pink 800
    falling: "#B382F1", // Purple 700
    flat: greys.grey50,
    rising: blues.blue300,
    gaining: "#50D0EB", // Cyan 300
    surging: greens.green300,
  },
  achievements: {
    bg: yellows.yellow900,
    tertiary: yellows.yellow800,
    secondary: yellows.yellow700,
    primary: yellows.yellow300,
  },
  chartGradients: {
    priceFrom: "#3F75FF",
    priceTo: "#3F75FF",
    priceFromMobile: "#6598FF",
    priceToMobile: "#031124",
  },
  selectGroup: {
    radioBorder: greys.grey400,
  },
};
