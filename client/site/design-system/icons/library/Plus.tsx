import { createIcon } from "@chakra-ui/react";
import { FC } from "react";
import { IconProps } from "../../types/shared";

const Default = createIcon({
  displayName: "PlusDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      d="M8.5 3.333a.5.5 0 0 1 .5.5v9.334a.5.5 0 0 1-1 0V3.833a.5.5 0 0 1 .5-.5Z"
      key="0"
    />,
    <path
      d="M3.333 8.5a.5.5 0 0 1 .5-.5h9.334a.5.5 0 0 1 0 1H3.833a.5.5 0 0 1-.5-.5Z"
      key="1"
    />,
  ],
});

const Thick = createIcon({
  displayName: "PlusThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path key="0" d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" />,
    <path key="1" d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />,
  ],
});

const Thin = createIcon({
  displayName: "PlusThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      d="M12 4.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
    />,
    <path
      key="1"
      d="M4.5 12a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z"
    />,
  ],
});

export const Plus: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
