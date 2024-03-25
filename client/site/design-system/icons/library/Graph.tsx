import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "GraphDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "transparent",
  },
  path: [
    <path
      key={0}
      d="M5 21.4316H19C20.1046 21.4316 21 20.5362 21 19.4316V5.43164C21 4.32707 20.1046 3.43164 19 3.43164H5C3.89543 3.43164 3 4.32707 3 5.43164V19.4316C3 20.5362 3.89543 21.4316 5 21.4316Z"
      stroke="white"
    />,
    <path key={1} d="M16 17.4316V10.4316" stroke="white" />,
    <path key={2} d="M12 17.4316V13.4316" stroke="white" />,
    <path key={3} d="M8 17.4316V8.43164" stroke="white" />,
  ],
});

const Thick = createIcon({
  displayName: "GraphThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key={0}
      d="M5 21.4316H19C20.1046 21.4316 21 20.5362 21 19.4316V5.43164C21 4.32707 20.1046 3.43164 19 3.43164H5C3.89543 3.43164 3 4.32707 3 5.43164V19.4316C3 20.5362 3.89543 21.4316 5 21.4316Z"
      stroke="white"
    />,
    <path key={1} d="M16 17.4316V10.4316" stroke="white" />,
    <path key={2} d="M12 17.4316V13.4316" stroke="white" />,
    <path key={3} d="M8 17.4316V8.43164" stroke="white" />,
  ],
});

const Thin = createIcon({
  displayName: "GraphThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key={0}
      d="M5 21.4316H19C20.1046 21.4316 21 20.5362 21 19.4316V5.43164C21 4.32707 20.1046 3.43164 19 3.43164H5C3.89543 3.43164 3 4.32707 3 5.43164V19.4316C3 20.5362 3.89543 21.4316 5 21.4316Z"
      stroke="white"
    />,
    <path key={1} d="M16 17.4316V10.4316" stroke="white" />,
    <path key={2} d="M12 17.4316V13.4316" stroke="white" />,
    <path key={3} d="M8 17.4316V8.43164" stroke="white" />,
  ],
});

export const Graph: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
