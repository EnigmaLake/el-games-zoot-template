import React from "react";
import { createIcon } from "@chakra-ui/react";

const ChevronDown = createIcon({
  displayName: "ChevronDown",
  viewBox: "0 0 10 6",
  defaultProps: {
    stroke: "grayscale.white",
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M0.833332 0.777832L5 4.9445L9.16667 0.777832" />,
});

export default ChevronDown;
