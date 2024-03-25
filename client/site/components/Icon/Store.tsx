import { createIcon } from "@chakra-ui/react";

const Store = createIcon({
  displayName: "Store",
  defaultProps: {
    width: 4,
    height: 4,
    fill: "none",
    stroke: "icon.primary",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  viewBox: "0 0 16 16",
  path: [
    <path key="0" d="M6.33301 2.33398H2.33301V6.33398H6.33301V2.33398Z" />,
    <path key="1" d="M13.667 2.33398H9.66699V6.33398H13.667V2.33398Z" />,
    <path key="2" d="M13.667 9.66602H9.66699V13.666H13.667V9.66602Z" />,
    <path key="3" d="M6.33301 9.66602H2.33301V13.666H6.33301V9.66602Z" />,
  ],
});

export { Store };
