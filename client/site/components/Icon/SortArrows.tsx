import { createIcon } from "@chakra-ui/react";

const SortArrows = createIcon({
  displayName: "SortArrows",
  viewBox: "0 0 16 16",
  defaultProps: {
    stroke: "#F3F3F3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: (
    <path d="m6.667 5.333-2-2-2 2M4.667 12.667V3.333M9.333 10.667l2 2 2-2M11.333 3.333v9.334" />
  ),
});

export default SortArrows;
