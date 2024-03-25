import { createIcon } from "@chakra-ui/react";

const Graph = createIcon({
  displayName: "Graph",
  viewBox: "0 0 15 15",
  defaultProps: {
    width: 3.5,
    height: 3.5,
    fill: "none",
    stroke: "brand.neutral100",
    strokeWidth: "1.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <path
      key="0"
      d="M5.94117 12.4165H3.18609C2.88159 12.4165 2.63542 12.1697 2.63542 11.8658V9.66199C2.63542 9.35749 2.88217 9.11133 3.18609 9.11133H5.94059"
    />,
    <path
      key="1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.24634 3.05018V12.4162H12.0008C12.3053 12.4162 12.5515 12.1694 12.5515 11.8655V3.05018C12.5515 2.74568 12.3048 2.49951 12.0008 2.49951H9.797C9.49309 2.49951 9.24634 2.74626 9.24634 3.05018H9.24634Z"
    />,
    <path
      key="2"
      d="M9.24633 12.4166H5.94058V6.35633C5.94058 6.05183 6.18733 5.80566 6.49125 5.80566H9.24575"
    />,
  ],
});

export { Graph };
