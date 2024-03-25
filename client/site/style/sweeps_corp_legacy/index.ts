import {
  Colors,
  cssVar,
  extendTheme,
  theme as chakraTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { MiscColors, UIColors } from "./colors";
import Badge from "./components/badgeStyles";
import Button from "./components/buttonStyles";
import Checkbox from "./components/checkboxStyles";
import PriceInfo from "./components/priceInfoStyles";
import Progress from "./components/progressStyles";
import { inputStyle } from "./components/inputStyles";
import SidebarMenuButton from "./components/sidebarMenuButtonStyles";
import Text from "./components/textStyles";
import { List } from "./components/listStyles";
import { mode } from "@chakra-ui/theme-tools";

// DO NOT USE THIS FILE AS INSPIRATION. IT SHOULD BE COMPLETELY DEPRECATED.
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      bg: mode("blue.50", "blue.900"),
    },
  }),
};

const color = {
  white: "#ffffff",
  white10: "#FFFFFF1A", // White at 10%
  black: "#010810",
  gray_00: "#07111C",
  gray_00x: "#0C1722",
  gray_00xx: "#1D2937",
  gray_01: "#1A2837",
  gray_02: "#5C6A79",
  gray_03: "#89949E",
  gray_04: "#D1D5DC",
  gray_05: "#F2F4F8",
  gray_06: "#677582",
  gray_07: "#404B57",
  gray_08: "#3D4B58",
  gray_09: "#565656",
  gray_10: "#222F3D",
  gray_11: "#313E4B",
} as const;

const priceBucketColors = {
  Crashing: "#A175FF",
  Dropping: "#55C2FF",
  Falling: "#55FFC2",
  Flat: "#FFFFFF",
  Rising: "#FFE455",
  Gaining: "#FF9255",
  Surging: "#FF55EE",
};

/**
 * @deprecated legacy colors, to be updated/removed/migrated to use colors master sheet
 * DO NOT ADD TO THIS
 */
export const legacy_colors: Record<string, Colors> = {
  brand: {
    primary300: "#84B1FE",
    primary400: "#6591FF",
    primary500: "#3F75FF",
    primary600: "#3362D5",
    primary700: "#284FAB",
    primary800: "#192F66",
    gold1: "#433C33",
    gold2: "#867A4F",
    gold3: "#7C5A33",
    gold4: "#C89354",
    gold5: "#FFE665",
    gray50: "#F3F3F3", // same as design system color def
    gray100: "#BFCBDA", // same as design system color def
    gray200: "#ABB4BF",
    gray300: "#8E9FB0",
    gray400: "#5D7088",
    gray500: "#374D6D",
    gray600: "#213356",
    gray700: "#0F2546",
    gray900: "#05162E",
    neutral50: "#F3F3F3", // same as design system color def greys
    neutral100: "#BFCBDA", // same as design system color def
    neutral200: "#8199B4", // same as design system color def
    neutral300: "#677C95", // same as design system color def
    neutral400: "#4E617F", // same as design system color def
    neutral500: "#324667", // same as design system color def
    neutral600: "#1E3352", // same as design system color def
    neutral700: "#0B203D", // same as design system color def
    neutral800: "#061932", // same as design system color def
    neutral900: "#031124", // same as design system color def
    purple300: "#DDA7FE",
    purple400: "#D28AFE",
    teal500: "#53C8FF",
    yellow300: "#FFDC88",
    yellowImReward: "#F7C885",
    red500: "#D8564B",
    red800: "#A70028",
    green500: "#6cc000",
    orange500: "#F4B000",
  },
  grayscale: {
    white: color.white,
    white10: color.white10,
    black: color.black,
    "00": color.gray_00,
    "00x": color["gray_00x"],
    "00xx": color["gray_00xx"],
    "01": color.gray_01,
    "02": color.gray_02,
    "03": color.gray_03,
    "04": color.gray_04,
    "05": color.gray_05,
    "06": color.gray_06,
    "07": color.gray_07,
    "08": color.gray_08,
    "09": color.gray_09,
    "10": color.gray_10,
    "11": color.gray_11,
  },
  background: {
    "00": "#031124", // same as design system color def grey 900
    "01": "#001730",
    "02": "#0b2540",
    "03": "#05162E",
  },
  progress: {
    200: color.white,
    500: color.gray_00,
  },
  rewards: {
    200: "#9A915D",
  },
  status: {
    success: "#07B681",
    success20: "#07B68133", // at 20% opacity
    success500: "#4DDF76",
    success600: "#06A576",
    error: "#ed375e",
    error20: "#ed375e33", // at 20% opacity
    error500: "#F86155", // same as design system color def red 500
    loggedIn: "#06bbf8",
    warning: "#E6A815",
    warning20: "#E6A81533", // at 20% opacity
    warning500: "#FFCD59",
  },
  winRateProgress: {
    200: "#8199B4", // neutral 200
  },
  secondaryBackground: {
    500: "#09D7FF",
  },
  secondaryText: {
    500: "#0B64C0",
  },
  priceBucketColors,
  chart: {
    series: {
      empty: "#227793",
      winRate: "var(--color-golden)",
      "00": "#227793",
      "01": "#213356", // gray600
      "02": "#6591FF", // primary400
      "03": color.white,
      "04": "#C89354", // gold2
      "05": "#8CACFF",
    },
    grid: "red",
    gridDark: "transparent",
    crosshair: "#bf060c",
  },
  // All the bg colors are 15% opacity
  axieClass: {
    aquatic: {
      default: "#00B8CE",
      bg: "#00B8CE26",
    },
    beast: {
      default: "#FFB812",
      bg: "#FFB81226",
    },
    bird: {
      default: "#FF8BBD",
      bg: "#FF8BBD26",
    },
    bug: {
      default: "#FF5341",
      bg: "#FF534126",
    },
    dawn: {
      default: "#BECEFF",
      bg: "#BECEFF26",
    },
    dusk: {
      default: "#129092",
      bg: "#12909226",
    },
    mech: {
      default: "#C6BDD4",
      bg: "#C6BDD426",
    },
    plant: {
      default: "#6CC000",
      bg: "#6CC00026",
    },
    reptile: {
      default: "#904CC5",
      bg: "#904CC526",
    },
  },
  progressBar: {
    color: "rgb(163, 90, 255)",
    colorEnding: "rgba(163, 90, 255, 0.2)",
    shadow: "0 0 3px 2px rgba(92, 0, 208, 0.23)",
  },
  homepage: {
    header: {
      bg: "#03112480", // 50% transparency // same as design system color def grey 900 w/o transparency
    },
  },
  interaction: {
    primary: {
      300: "#677A95",
      500: "#1E7AE6", // same as design system color def blue 500
      700: "#135098", // same as design system color def blue 700
      900: "#092951", // same as design system color def blue 900
    },
  },
};

export const colors: Record<string, Colors> = {
  ...legacy_colors,
  ...UIColors,
  ...MiscColors,
};

const fontSizes = {
  xxs: "0.625rem", // 10px
  "2xxs": "0.688rem", // 11px
  xs: "0.75rem", // 12px
  "2xs": "0.813rem", // 13px
  sm: "0.875rem", // 14px
  "2sm": "0.938rem", // 15px
  base: "1rem", // 16px
  "2base": "1.125rem", // 18px
  md: "1.25rem", // 20px
  lg: "1.5rem", // 24px
  "2lg": "1.25rem", // 26px
  llg: "1.75rem", // 28px
  "2llg": "1.875rem", // 30px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  xxl: "3rem", // 48px
};

const letterSpacings = {
  xtighter: "-0.003em", // -0.1px
  tighter: "-0.05em", // -0.2px
  tight: "-0.025em", // -0.3px
  normal: "0", // 0
  minimum: "0.008em", // 0.12px
  little: "0.015em", // 0.24px
  wide: "0.025em", // 0.3px
  wider: "0.06em", // 0.6px
  widest: "0.1em", // 1.0px
};

export const aquaGameSizes = {
  hideHeaderOnSmAndBelow: false,
  width: "13.75rem",
  widthpx: {
    base: 220,
    md: 220,
  },
  height: "25rem",
  heightCurrency: {
    base: "39.4rem",
    md: "27.1rem",
  },
  heightpx: {
    base: 480,
    md: 430,
  },
  listView: {
    // Borrowed from GU, may need to be adjusted
    width: "59.25rem",
    widthpx: 948,
    height: "3.938rem", // 63px
    heightpx: 63, // 74px - 12px spacing + 1px border
  },
  cardBody: {
    heightpx: 286,
    widthpx: "full",
  },
  image: {
    width: "100%", // 220px
    widthpx: 277, // for image urls
    height: "17.875rem",
    heightpx: 286,
    detailWidth: "20rem",
    detailWidthpx: 320,
    detailHeight: "20rem",
    detailHeightpx: 320,
  },
};

export const sizes = {
  ...chakraTheme.space,
  0.5: "0.125rem", // 2px
  2.5: "0.625rem", // 10px
  4.5: "1.125rem", // 18px
  5: "1.25rem", // 20px
  5.5: "1.375rem", // 22px
  6: "1.5rem", // 24px
  6.5: "1.625rem", // 26px
  7: "1.75rem", // 28px
  7.5: "1.875rem", // 30px
  8.5: "2.125rem", // 34px
  9: "2.25rem", // 36px
  9.5: "2.375rem", // 38px
  10: "2.5rem", // 40px
  10.5: "2.625rem", // 42px
  11: "2.75rem", // 44px
  12.5: "3.125rem", // 50px
  13: "3.25rem", // 52px
  15: "3.75rem", // 60px
  19.5: "4.875rem", // 78px
  25: "6.25rem", // 100px for logo,
  "fit-content": "fit-content",
  // Must hardcoded because of line height
  hitAbilityDescriptionHeight: "2.625rem", // 40px
  statIconSize: "1rem",
  bodyPartIcon: {
    xl: "1.75rem",
    lg: "1.5rem",
    md: "1.25rem",
    sm: "1rem",
  },
  navigationHeight: "4.6875rem",
  pageMaxWidth: "80rem",
  chartVolumeH: "0.875rem",
  chartVolumeW: "2.375rem",
  buyButtonW: "7.1rem",
  buyButtonH: "2.5rem",
  hitHeaderIconSize: "2.625rem",
  hitAxieImageHeight: "9rem",
  filtersStatSize: "1.25rem",
  filtersContainerWidth: "18rem",
  brandLogoWidth: 60,
  brandLogoHeight: 24,
  brandLogoSize: "38px",
  smallDividerWidth: "1.5rem",
  thumbSize: "1rem",
  dotSize: "0.375rem",
  trackHeight: "0.125rem",
  cardWidth: {
    l: "22rem",
    s: "17.3125rem",
  },
  cardHeight: {
    l: "29.6875rem",
    s: "20.3125rem",
  },
  guildManagerStatW: "14.25rem",
  homepage: {
    // featuredCard width is used in 3 places. width of featured card, itemWidth for Carousel, minChildWidth of SimpleGrid in FeaturedGames
    featuredCard: {
      minWidth: {
        base: "100%",
        lg: "calc(50% - 30px)",
      },
    },
    latestAdditionCard: {
      minWidth: {
        base: "100%",
        lg: "calc(30% - 30px)",
      },
    },
    communityPost: {
      container: {
        width: {
          base: "17.813rem", // 285px
          md: "19.375rem", //310px
        },
      },
      image: {
        width: "19.375rem", //310px
        height: "10.875rem", //174px
      },
    },
  },
  sidenav: {
    mobile: {
      gameSelector: {
        width: "19.25rem",
        height: "3.75rem",
      },
    },
  },
};

const space = {
  ...chakraTheme.space,
  page: {
    content: {
      marginTop: "1.125rem", // 18px
    },
  },
};

const lineHeights = {
  ...chakraTheme.lineHeights,
  2.5: "0.625rem", // 10px
  3.5: "0.875rem", // 14px
  4.5: "1.125rem", // 18px
  5.5: "1.375rem", // 22px
  6: "1.5rem", // 24px
  7.5: "1.875rem", // 30px
  8.5: "2.125rem", // 34px
  9.5: "2.375rem", // 38px
  10.5: "2.625rem", // 42px
  13: "3rem", // 48px
};

const $arrowBg = cssVar("popper-arrow-bg");

const SweepsCorpLegacy = {
  config,
  styles,
  colors,
  fontSizes,
  letterSpacings,
  sizes,
  space,
  lineHeights,
  components: {
    Text,
    Badge,
    Button,
    Progress,
    List,
    Link: {
      variants: {
        plain: {
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
        },
        plainCalloutSmall: {
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
          fontFamily: "Inter",
          fontSize: "0.875rem",
          lineHeight: "1.125rem",
          fontWeight: "600",
          textAlign: "center",
          letterSpacing: "0.04rem",
        },
        sideMenuNavigation: {
          fontSize: "1rem",
          lineHeight: "1.125rem",
          fontWeight: "400",
          letterSpacing: "0.015rem",
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },
    Modal: {
      sizes: {
        xxl: { dialog: { maxW: "50rem" } },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "grayscale.08",
        [$arrowBg.variable]: "colors.grayscale.08",
        color: "white",
        fontWeight: "normal",
      },
    },
    SidebarMenuButton,
    PriceInfo,
    Checkbox,
    Input: inputStyle,
  },
};

export enum StandardNamedSizes {
  DEFAULT,
  SMALL,
  MEDIUM,
  LARGE,
}

export const getSizedDimension = (
  identifier: string,
  size: StandardNamedSizes
) => {
  let sizeModifier = "";

  switch (size) {
    case StandardNamedSizes.MEDIUM:
      sizeModifier = "_md";
      break;
    case StandardNamedSizes.LARGE:
      sizeModifier = "_lg";
      break;
    case StandardNamedSizes.SMALL:
      sizeModifier = "_sm";
  }

  return identifier + sizeModifier;
};

const theme = extendTheme(SweepsCorpLegacy);
export { theme };

export default SweepsCorpLegacy;
