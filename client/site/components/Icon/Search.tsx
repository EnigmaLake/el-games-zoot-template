import { createIcon } from "@chakra-ui/react";

const Search = createIcon({
  displayName: "Search",
  defaultProps: {
    width: 6,
    height: 6,
    fill: "none",
    stroke: "grayscale.white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.35-4.35" />,
});

export { Search };
