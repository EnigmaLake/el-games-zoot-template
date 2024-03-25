import React from "react";
import { createIcon } from "@chakra-ui/react";

const Checkmark = createIcon({
  displayName: "Checkmark",
  viewBox: "0 0 18 13",
  defaultProps: {
    stroke: "brand.gray50",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M1.5 6.5L6.5 11.5L16.5 1.5" />,
});

export default Checkmark;
