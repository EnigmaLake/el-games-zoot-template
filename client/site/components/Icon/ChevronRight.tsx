import React from "react";
import { createIcon } from "@chakra-ui/react";

const ChevronRight = createIcon({
  displayName: "ChevronRight",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    stroke: "grayscale.white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M7.5 15L12.5 10L7.5 5" />,
});

export default ChevronRight;
