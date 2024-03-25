import { createIcon } from "@chakra-ui/react";

const Plus = createIcon({
  displayName: "Plus",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    stroke: "white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <path key="0" d="M10 4.16663V15.8333" />,
    <path key="1" d="M4.16699 10H15.8337" />,
  ],
});

export default Plus;
