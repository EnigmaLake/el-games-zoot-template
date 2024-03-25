import { createIcon } from "@chakra-ui/react";

const Ellipse = createIcon({
  displayName: "Ellipse",
  viewBox: "0 0 8 8",
  defaultProps: {
    width: 2, //8px
    height: 2, //8px
    color: "#64D8A1",
  },
  path: [
    <circle
      key="ellipse"
      id="Ellipse 1"
      cx="4"
      cy="4"
      r="4"
      fill="currentColor"
    />,
  ],
});

export { Ellipse };
