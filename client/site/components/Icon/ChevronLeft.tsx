import React from "react";
import { createIcon } from "@chakra-ui/react";

const ChevronLeft = createIcon({
  displayName: "ChevronLeft",
  viewBox: "0 0 20 20",
  defaultProps: {
    stroke: "grayscale.white",
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M12.5 15L7.5 10L12.5 5" />,
});

export default ChevronLeft;
