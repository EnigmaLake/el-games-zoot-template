import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ChevronDownDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M6.47 8.97a.75.75 0 0 1 1.06 0L12 13.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "ChevronDownThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M6.293 8.793a1 1 0 0 1 1.414 0L12 13.086l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "ChevronDownThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M6.646 9.146a.5.5 0 0 1 .708 0L12 13.793l4.646-4.647a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />
  ),
});

export const ChevronDown: FC<IconProps> = ({
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
