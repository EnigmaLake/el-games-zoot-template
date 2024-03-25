import { createIcon } from "@chakra-ui/react";

const Players = createIcon({
  displayName: "Players",
  defaultProps: {
    width: 6,
    height: 6,
    stroke: "grayscale.white",
    fill: "grayscale.white",
    strokeWidth: 0.2,
    strokeLinejoin: "round",
    className: "players",
  },
  path: [
    <path
      key="0"
      d="M4.4 13a.1.1 0 0 0 .1.1H12a1.4 1.4 0 1 1 0 2.8H9v.1-.1H8.99l-.02.001a.726.726 0 0 0-.266.072.538.538 0 0 0-.21.182.608.608 0 0 0-.095.345c0 .142.036.256.095.345a.538.538 0 0 0 .21.182.714.714 0 0 0 .286.073h.008L9 17v.1h3a2.6 2.6 0 0 0 0-5.2H4.5a.1.1 0 0 0-.1.1v1Z"
    />,
    <path
      key="1"
      d="M17 12.1a.1.1 0 0 0 .1-.1V3.5a1.4 1.4 0 1 1 2.8 0v11a7.4 7.4 0 0 1-14.8 0v-11a1.4 1.4 0 1 1 2.8 0V12a.1.1 0 0 0 .1.1h1a.1.1 0 0 0 .1-.1V3.5a2.6 2.6 0 0 0-5.2 0v11a8.6 8.6 0 0 0 17.2 0v-11a2.6 2.6 0 0 0-5.2 0V12a.1.1 0 0 0 .1.1h1Z"
    />,
    <path
      key="2"
      d="M13 12.1a.1.1 0 0 0 .1-.1V9.5a1.4 1.4 0 1 1 2.8 0V13a1.4 1.4 0 0 1-1.4 1.4.1.1 0 0 0-.09.055l-.5 1a.1.1 0 0 0 .09.145h.5a2.6 2.6 0 0 0 2.6-2.6V9.5a2.6 2.6 0 0 0-5.2 0V12a.1.1 0 0 0 .1.1h1Z"
    />,
    <path
      key="3"
      d="M9 12.6a.1.1 0 0 0 .1-.1v-3a1.4 1.4 0 1 1 2.8 0v3a.1.1 0 0 0 .1.1h1a.1.1 0 0 0 .1-.1v-3a2.6 2.6 0 0 0-5.2 0v3a.1.1 0 0 0 .1.1h1Z"
    />,
  ],
});

export { Players };
