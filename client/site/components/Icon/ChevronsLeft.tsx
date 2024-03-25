import React from "react";
import { createIcon } from "@chakra-ui/react";

const ChevronsLeft = createIcon({
  displayName: "ChevronsLeft",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    stroke: "grayscale.white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <path key="0" d="M9.16667 14.1666L5 9.99992L9.16667 5.83325" />,
    <path key="1" d="M15 14.1666L10.8333 9.99992L15 5.83325" />,
  ],
});

export default ChevronsLeft;
