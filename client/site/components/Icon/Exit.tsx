import React from "react";
import { createIcon } from "@chakra-ui/react";

const Exit = createIcon({
  displayName: "Exit",
  viewBox: "0 0 25 24",
  defaultProps: {
    fill: "var(--chakra-colors-grayscale-03)",
    strokeWidth: 1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "25px",
    height: "24px",
  },
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5303 5.53033C21.8232 5.23744 21.8232 4.76256 21.5303 4.46967C21.2374 4.17678 20.7626 4.17678 20.4697 4.46967L13 11.9393L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L11.9393 13L4.46967 20.4697C4.17678 20.7626 4.17678 21.2374 4.46967 21.5303C4.76256 21.8232 5.23744 21.8232 5.53033 21.5303L13 14.0607L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L14.0607 13L21.5303 5.53033Z"
    />
  ),
});

export default Exit;
