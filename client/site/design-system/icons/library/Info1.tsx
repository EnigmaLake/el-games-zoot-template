import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "Info1Default",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M12 17.79a.75.75 0 0 1-.75-.75V12a.75.75 0 0 1 1.5 0v5.04a.75.75 0 0 1-.75.75ZM12.75 8.035a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75Z"
      clipRule="evenodd"
    />,
  ],
});

const Thick = createIcon({
  displayName: "Info1Thick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M12 18.04a1 1 0 0 1-1-1V12a1 1 0 1 1 2 0v5.04a1 1 0 0 1-1 1ZM13 8.035a1 1 0 0 1-1 1h-.007a1 1 0 1 1 0-2H12a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />,
  ],
});

const Thin = createIcon({
  displayName: "Info1Thin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12ZM12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M12 17.54a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 1 0v5.04a.5.5 0 0 1-.5.5ZM12.5 8.035a.5.5 0 0 1-.5.5h-.007a.5.5 0 0 1 0-1H12a.5.5 0 0 1 .5.5Z"
      clipRule="evenodd"
    />,
  ],
});

export const Info1: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
