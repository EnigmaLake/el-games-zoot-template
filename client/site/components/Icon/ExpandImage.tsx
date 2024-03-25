import { createIcon } from "@chakra-ui/react";

const pathStyle = {
  fill: "none",
};
const ExpandImage = createIcon({
  displayName: "ViewImage",
  viewBox: "0 0 38 38",
  defaultProps: {
    width: 38,
    height: 38,
    stroke: "currentcolor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg",
  },
  path: [
    <path key={0} d="M14.008 4.99835H5.00422V14.0021" style={pathStyle} />,
    <path key={1} d="M14.7542 14.7484L5.00422 4.99835" style={pathStyle} />,
    <path
      key={2}
      d="M24.0005 33.0042L33.0042 33.0042L33.0042 24.0005"
      style={pathStyle}
    />,
    <path key={3} d="M23.2542 23.2484L33.0042 33.0042" style={pathStyle} />,
  ],
});

export default ExpandImage;
