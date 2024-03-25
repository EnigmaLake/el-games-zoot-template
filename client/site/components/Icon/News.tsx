import { createIcon } from "@chakra-ui/react";

const News = createIcon({
  displayName: "News",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "none",
    stroke: "grayscale.white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <path key="0" d="M4 19H20" />,
    <path key="1" d="M4 14L9.33333 9.2L12.8889 12.4L20 5" />,
    <path key="2" d="M15 5H20V10" />,
  ],
});

export default News;
