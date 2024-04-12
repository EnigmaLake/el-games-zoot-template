const colors = {
  neutral900: "#031124",
  neutral800: "#061932",
  neutral750: "#0C1F3A",
  neutral700: "#122745",
  neutral600: "#1E3352",
  neutral500: "#324667",
  neutral400: "#4E617F",
  neutral300: "#677C95",
  neutral200: "#8199B4",
  neutral100: "#BFCBDA",
  neutral50: "#F3F3F3",
  blue900: "#092951",
  blue700: "#135098",
  blue600: "#1965BF",
  blue500: "#1E7AE6",
  blue300: "#549AEC",
  red900: "#3B232F",
  red700: "#964141",
  red600: "#C7514B",
  red300: "#FA877E",
  red30055: "rgba(250, 135, 126, 0.55)",
  yellow900: "#3B302E",
  yellow800: "#5E5535",
  yellow700: "#8C763E",
  yellow300: "#EDC879",
  green900: "#0E3C3A",
  green400: "#328E62",
  green300: "#64D8A1",
  cyan300: "#50D0EB",
  purple700: "#B382F1",
  pink800: "#F367DE",
  orange100: "#E58A20",

  // "background-level-0": "var(--chakra-colors-neutral900)",
  // "background-level-1": "var(--chakra-colors-neutral750)",
  // "background-level-2": "#1E7AE633",
  // "background-level-3": "var(--chakra-colors-neutral500)",

  "background-level-2-solid": "#10315C",

  "bg-transparent-01": "#031124B8",
  "bg-transparent-02": "#0311248F",
  "bg-transparent-03": "#03112466",

  "bg-gradient-01": "var(--chakra-colors-neutral900)",

  "icons-disabled": "var(--chakra-colors-neutral400)",
  "icons-tertiary": "var(--chakra-colors-neutral300)",
  "icons-secondary": "var(--chakra-colors-neutral200)",
  "icons-primary": "var(--chakra-colors-neutral50)",

  "text-disabled": "var(--chakra-colors-neutral400)",
  "text-tertiary": "var(--chakra-colors-neutral400)",
  "text-secondary": "var(--chakra-colors-neutral200)",
  "text-primary": "var(--chakra-colors-neutral50)",

  "border-primary": "var(--chakra-colors-neutral600)",
  "border-secondary": "var(--chakra-colors-neutral500)",

  "divider-01": "var(--chakra-colors-neutral800)",
  "divider-02": "var(--chakra-colors-neutral700)",

  "inter-primary-default": "var(--chakra-colors-blue500)",
  "inter-primary-hover": "var(--chakra-colors-blue600)",
  "inter-primary-disabled-bkgd": "#1E7AE61A",
  "inter-primary-selected-bkgd": "#1E7AE680",

  "inter-secondary-default": "#1E7AE633",
  "inter-secondary-hover": "#1E7AE64D",
  "inter-secondary-disabled-bkgd": "#1E7AE61A",

  "inter-tertiary-default": "transparent",
  "inter-tertiary-hover": "#1E7AE64D",
  "inter-tertiary-disabled-bkgd": "#1E7AE61A",

  "inter-danger-default": "var(--chakra-colors-red600)",
  "inter-danger-hover": "var(--chakra-colors-red700)",

  "inter-text-primary": "var(--chakra-colors-blue500)",
  "inter-text-secondary": "var(--chakra-colors-neutral200)",
  "inter-text-hover": "var(--chakra-colors-blue600)",
  "inter-text-disabled": "var(--chakra-colors-neutral400)",

  "error-background": "var(--chakra-colors-red900)",
  "error-primary": "var(--chakra-colors-red300)",

  "warning-background": "var(--chakra-colors-yellow900)",
  "warning-primary": "var(--chakra-colors-yellow300)",

  "success-background": "var(--chakra-colors-green900)",
  "success-primary": "var(--chakra-colors-green300)",

  "toast-bg-primary": "var(--chakra-colors-blue600)",

  "currency-eth": "#CBA9F6",
  "currency-gods": "#F3DBA3",
  "currency-usdc": "#6FAAEF",
  "currency-imx": "#87DFF1",
  "currency-omi": "#F6978F",
  "currency-gog": "#BFCBDA",
  "currency-cmt": "#DB9718",
  "currency-matic": "#8F5AE8",

  "toxic-green": "#0DE83D",
  "yellow-gold": "#F9C611",

  "trend-surging": "var(--chakra-colors-green300)",
  "trend-gaining": "var(--chakra-colors-cyan300)",
  "trend-rising": "var(--chakra-colors-blue300)",
  "trend-flat": "var(--chakra-colors-neutral50)",
  "trend-falling": "var(--chakra-colors-purple700)",
  "trend-dropping": "var(--chakra-colors-pink800)",
  "trend-crashing": "var(--chakra-colors-red300)",

  "achievement-primary": "var(--chakra-colors-yellow300)",
  "achievement-secondary": "var(--chakra-colors-yellow700)",
  "achievement-tertiary": "var(--chakra-colors-yellow800)",
  "achievement-background": "var(--chakra-colors-yellow900)",

  "brand-purple": "#D28AFE",
  "brand-blue": "#6598FF",
  "brand-teal": "#75DEFF",
  "brand-yellow": "#FFDC88",

  "misc-content-background": "#1E7AE621",
  "misc-content-background-highlight": "#1E7AE64D",
  "brand-gradients-linear":
    "linear-gradient(90deg, #D28AFE 0%, #6598FF 34.75%, #75DEFF 66.25%, #FFDC88 100%)",
};

const colorsEL = {
  neutral900: "#0C1F3A",
  neutral850: "#112745",
  neutral750: "#122D56",
  neutral700: "#10315CBA",

  black900: "#031124",
  black850: "#10243F",

  "background-level-0": "var(--chakra-colors-neutral900)",
  "background-level-1": "var(--chakra-colors-neutral850)",
  "background-level-2": "var(--chakra-colors-neutral750)",
  "background-level-3": "var(--chakra-colors-neutral700)",
  "background-level-4": "rgba(25, 103, 220, 0.33)",
};

const finalTheme = { ...colors, ...colorsEL };

export default finalTheme;
