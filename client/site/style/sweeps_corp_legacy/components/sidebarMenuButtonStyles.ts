const SidebarMenuButtonStyle = {
  baseStyle: {
    color: "brand.neutral300",
    ">svg": {
      transition: "all 200ms",
      stroke: "brand.neutral300",
    },
    _hover: {
      background: "brand.neutral700",
      color: "brand.neutral50",
      cursor: "pointer",
      "> svg": {
        stroke: "brand.neutral50",
      },
      ".players": {
        fill: "brand.neutral50",
      },
    },
    _focus: {
      boxShadow: "var(--chakra-shadows-outline)",
    },
  },
  variants: {
    active: {
      background: "brand.neutral700",
      color: "brand.neutral50",
      cursor: "pointer",
      "> svg": {
        stroke: "brand.neutral50",
      },
      ".players": {
        fill: "brand.neutral50",
      },
    },
    white: {
      color: "white",
      ">svg": {
        transition: "all 200ms",
        stroke: "white",
      },
      ".players": {
        fill: "white",
      },
      _hover: {
        bg: "rgba(255, 255, 255, 0.15)",
      },
    },
  },
};

export default SidebarMenuButtonStyle;
