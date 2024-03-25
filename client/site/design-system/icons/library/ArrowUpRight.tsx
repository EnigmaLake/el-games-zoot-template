import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ArrowUpRightDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M7 7.75a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V8.81l-8.72 8.72a.75.75 0 0 1-1.06-1.06l8.72-8.72H7Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "ArrowUpRightThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M7 8a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H7Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "ArrowUpRightThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M7 7.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V8.207l-9.146 9.147a.5.5 0 0 1-.708-.708L15.793 7.5H7Z"
      clipRule="evenodd"
    />
  ),
});

export const ArrowUpRight: FC<IconProps> = ({
  variant = "default",
  ...rest
}) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
