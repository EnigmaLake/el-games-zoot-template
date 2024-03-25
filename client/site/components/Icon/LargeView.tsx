import React from "react";
import { createIcon } from "@chakra-ui/react";

const LargeView = createIcon({
  displayName: "LargeView",
  defaultProps: {
    width: 6,
    height: 6,
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: (
    <path d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
  ),
});

export { LargeView };
