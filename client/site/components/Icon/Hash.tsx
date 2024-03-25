import { createIcon } from "@chakra-ui/react";

const Hash = createIcon({
  displayName: "Hash",
  defaultProps: {
    width: 6,
    height: 6,
    fill: "none",
    stroke: "icon.primary",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M5 9h14M5 15h14M9 4v16M15 4v16" />,
});

export { Hash };
