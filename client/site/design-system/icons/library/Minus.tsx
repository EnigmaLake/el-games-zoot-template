import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "MinusDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "MinusThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "MinusThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M4.5 12a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z"
      clipRule="evenodd"
    />
  ),
});

export const Minus: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
