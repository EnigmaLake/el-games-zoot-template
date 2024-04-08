import React from "react";
import { createIcon } from "@chakra-ui/react";

const ChevronUp = createIcon({
  displayName: "ChevronUp",
  viewBox: "0 0 10 6",
  defaultProps: {
    stroke: "grayscale.white",
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M0.833332 5.22221L5 1.05554L9.16667 5.22221" />,
});

export default ChevronUp;
