import { createIcon } from "@chakra-ui/react";

const NoDataGraph = createIcon({
  displayName: "NoDataGraph",
  defaultProps: {
    boxSize: 6,
    fill: "brand.neutral500",
    xmlns: "http://www.w3.org/2000/svg",
  },
  path: [
    <rect
      key="bar1"
      x="0.833252"
      y="11.458"
      width="4"
      height="13.0425"
      rx="1"
    />,
    <rect key="bar2" x="6.83325" y="0.5" width="4" height="24" rx="1" />,
    <rect
      key="bar3"
      x="12.8333"
      y="13.7793"
      width="4"
      height="10.7207"
      rx="1"
    />,
    <rect
      key="bar4"
      x="18.8333"
      y="5.83301"
      width="4"
      height="18.6667"
      rx="1"
    />,
  ],
});

export default NoDataGraph;
