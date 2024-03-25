import { createIcon } from "@chakra-ui/react";

const Transfer = createIcon({
  displayName: "Transfer",
  defaultProps: {
    fill: "none",
    boxSize: 6, // 24px
    stroke: "greys.grey50",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  viewBox: "0 0 25 25",
  path: [
    <path key="0" d="M12.5469 22.3281L19.5469 15.3281L5.81104 15.3281" />,
    <path key="1" d="M12.811 3.32812L5.81104 10.3281H19.5469" />,
  ],
});

export { Transfer };
