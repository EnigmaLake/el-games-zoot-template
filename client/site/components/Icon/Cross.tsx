import React from "react";
import { createIcon } from "@chakra-ui/react";

const Cross = createIcon({
  displayName: "Cross",
  viewBox: "0 0 16 16",
  defaultProps: {
    stroke: "brand.neutral600",
    fill: "brand.red500",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <circle key="0" cx="8.00293" cy="8.07715" r="7" />,
    <path key="1" d="M5.52783 5.60254L10.4776 10.5523" />,
    <path key="2" d="M5.52783 10.5527L10.4776 5.60299" />,
  ],
});

export default Cross;
