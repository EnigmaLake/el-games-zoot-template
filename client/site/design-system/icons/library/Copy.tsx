import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "CopyDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M11 9.75c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25v-9c0-.69-.56-1.25-1.25-1.25h-9ZM8.25 11A2.75 2.75 0 0 1 11 8.25h9A2.75 2.75 0 0 1 22.75 11v9A2.75 2.75 0 0 1 20 22.75h-9A2.75 2.75 0 0 1 8.25 20v-9Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M4 2.75A1.25 1.25 0 0 0 2.75 4v9A1.25 1.25 0 0 0 4 14.25h1a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 13V4A2.75 2.75 0 0 1 4 1.25h9A2.75 2.75 0 0 1 15.75 4v1a.75.75 0 0 1-1.5 0V4A1.25 1.25 0 0 0 13 2.75H4Z"
      clipRule="evenodd"
    />,
  ],
});

const Thick = createIcon({
  displayName: "CopyThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M11 10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9Zm-3 1a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M4 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1H4Z"
      clipRule="evenodd"
    />,
  ],
});

const Thin = createIcon({
  displayName: "CopyThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M11 9.5A1.5 1.5 0 0 0 9.5 11v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 20 9.5h-9ZM8.5 11A2.5 2.5 0 0 1 11 8.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 8.5 20v-9Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M4 2.5A1.5 1.5 0 0 0 2.5 4v9A1.5 1.5 0 0 0 4 14.5h1a.5.5 0 0 1 0 1H4A2.5 2.5 0 0 1 1.5 13V4A2.5 2.5 0 0 1 4 1.5h9A2.5 2.5 0 0 1 15.5 4v1a.5.5 0 0 1-1 0V4A1.5 1.5 0 0 0 13 2.5H4Z"
      clipRule="evenodd"
    />,
  ],
});

export const Copy: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
