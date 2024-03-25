import { createIcon } from "@chakra-ui/react";

export const Explore = createIcon({
  displayName: "Explore",
  viewBox: "0 0 16 16",
  defaultProps: {
    width: 4,
    height: 4,
    fill: "none",
    stroke: "icon.primary",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <path
      key="0"
      d="M7.99967 14.6673C11.6816 14.6673 14.6663 11.6825 14.6663 8.00065C14.6663 4.31875 11.6816 1.33398 7.99967 1.33398C4.31778 1.33398 1.33301 4.31875 1.33301 8.00065C1.33301 11.6825 4.31778 14.6673 7.99967 14.6673Z"
    />,
    <path key="1" d="M1.33301 8H14.6663" />,
    <path
      key="2"
      d="M7.99967 1.33398C9.66719 3.15955 10.6148 5.52867 10.6663 8.00065C10.6148 10.4726 9.66719 12.8417 7.99967 14.6673C6.33215 12.8417 5.38451 10.4726 5.33301 8.00065C5.38451 5.52867 6.33215 3.15955 7.99967 1.33398V1.33398Z"
    />,
  ],
});
