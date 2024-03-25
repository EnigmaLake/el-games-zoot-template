import React from "react";
import { createIcon } from "@chakra-ui/react";

const Error = createIcon({
  displayName: "Error",
  viewBox: "0 0 24 24",
  defaultProps: {
    stroke: "error-primary",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  },
  path: (
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM15 9l-6 6M9 9l6 6" />
  ),
});

export default Error;
