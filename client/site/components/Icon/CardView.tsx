import React from "react";
import { createIcon } from "@chakra-ui/react";

const CardView = createIcon({
  displayName: "CardView",
  viewBox: "0 0 24 24",
  defaultProps: {
    xmlns: "http://www.w3.org/2000/svg",
    color: "#fff",
    fill: "none",
    stroke: "none",
    width: 6,
    height: 6,
  },
  path: [
    <path
      key="0"
      fill="currentColor"
      fillRule="evenodd"
      d="M11 2.5H5A1.5 1.5 0 003.5 4v10A1.5 1.5 0 005 15.5h6a1.5 1.5 0 001.5-1.5V4A1.5 1.5 0 0011 2.5zM5 1a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V4a3 3 0 00-3-3H5z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fill="currentColor"
      d="M6.5 17A1.5 1.5 0 008 18.5h6a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0014 5.5V4a3 3 0 013 3v10a3 3 0 01-3 3H8a3 3 0 01-3-3h1.5z"
    />,
    <path
      key="2"
      fill="currentColor"
      d="M9.5 20a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V10A1.5 1.5 0 0017 8.5V7a3 3 0 013 3v10a3 3 0 01-3 3h-6a3 3 0 01-3-3h1.5z"
    />,
  ],
});

export { CardView };
