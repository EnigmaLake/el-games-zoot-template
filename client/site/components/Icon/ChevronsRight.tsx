import React from "react";
import { createIcon } from "@chakra-ui/react";

const ChevronsRight = createIcon({
  displayName: "ChevronsRight",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "none",
    stroke: "grayscale.white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <path key="0" d="M13 17L18 12L13 7" />,
    <path key="1" d="M6 17L11 12L6 7" />,
  ],
});

export default ChevronsRight;
