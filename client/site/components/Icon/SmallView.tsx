import { createIcon } from "@chakra-ui/react";

const SmallView = createIcon({
  displayName: "SmallView",
  defaultProps: {
    width: 6,
    height: 6,
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
});

export { SmallView };
