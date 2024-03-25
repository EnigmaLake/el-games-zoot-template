import React from "react";
import { createIcon } from "@chakra-ui/react";

const ExclamationMark = createIcon({
  displayName: "ExclamationMark",
  viewBox: "0 0 16 16",
  defaultProps: {
    width: 4, // 16px
    height: 4,
    stroke: "brand.neutral600",
    fill: "brand.red500",
    strokeLinejoin: "round",
  },
  path: [
    <circle key="0" cx="8.00293" cy="8.07715" r="7" stroke="none" />,
    <path
      key="1"
      d="M7.99658 4.68457L7.99658 8.58624"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="square"
    />,
    <path
      key="2"
      d="M7.99658 11.3154H8.00325"
      fill="none"
      strokeWidth="1.85"
      strokeLinecap="round"
    />,
  ],
});

export default ExclamationMark;
