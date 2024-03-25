import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ArrowRightDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M11.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L17.94 12l-6.47-6.47a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />,
  ],
});

const Thick = createIcon({
  displayName: "ArrowRightThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 12l-6.293-6.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />,
  ],
});

const Thin = createIcon({
  displayName: "ArrowRightThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M4.5 12a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M11.646 4.646a.5.5 0 0 1 .708 0l7 7a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708L18.293 12l-6.647-6.646a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />,
  ],
});

export const ArrowRight: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
