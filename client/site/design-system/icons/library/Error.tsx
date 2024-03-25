import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ErrorDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />,
    <path
      key="2"
      fillRule="evenodd"
      d="M8.47 8.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />,
  ],
});

const Thick = createIcon({
  displayName: "ErrorThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />,
    <path
      key="2 "
      fillRule="evenodd"
      d="M8.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />,
  ],
});

const Thin = createIcon({
  displayName: "ErrorThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M15.354 8.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0Z"
      clipRule="evenodd"
    />,
    <path
      key="2"
      fillRule="evenodd"
      d="M8.646 8.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />,
  ],
});

export const Error: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
