import React from "react";
import { createIcon } from "@chakra-ui/react";

const AnalyticsView = createIcon({
  displayName: "AnalyticsView",
  viewBox: "0 0 24 24",
  defaultProps: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 6,
    height: 6,
    fill: "none",
    stroke: "currentColor",
  },
  path: [
    <path
      key="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 19h16M4 14l5.333-4.8 3.556 3.2L20 5"
    />,
    <path
      key="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 5h5v5"
    />,
  ],
});

export { AnalyticsView };
