import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ListViewDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M7.25 6A.75.75 0 0 1 8 5.25h13a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6ZM7.25 12a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM7.25 18a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM2.25 6A.75.75 0 0 1 3 5.25h.01a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6ZM2.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM2.25 18a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "ListViewThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M7 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 12a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 18a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM2 6a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 18a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "ListViewThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M7.5 6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5ZM7.5 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5ZM7.5 18a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5ZM2.5 6a.5.5 0 0 1 .5-.5h.01a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5ZM2.5 12a.5.5 0 0 1 .5-.5h.01a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5ZM2.5 18a.5.5 0 0 1 .5-.5h.01a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Z"
      clipRule="evenodd"
    />
  ),
});

export const ListView: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
