import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "SearchDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M11 3.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM2.25 11a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M16.12 16.12a.75.75 0 0 1 1.06 0l4.35 4.35a.75.75 0 1 1-1.06 1.06l-4.35-4.35a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />,
  ],
});

const Thick = createIcon({
  displayName: "SearchThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />,
  ],
});

const Thin = createIcon({
  displayName: "SearchThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M11 3.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM2.5 11a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M16.296 16.296a.5.5 0 0 1 .708 0l4.35 4.35a.5.5 0 0 1-.708.708l-4.35-4.35a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />,
  ],
});

export const Search: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
