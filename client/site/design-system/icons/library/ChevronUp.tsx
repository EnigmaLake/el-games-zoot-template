import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ChevronUpDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M11.47 8.97a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06L12 10.56l-4.47 4.47a.75.75 0 0 1-1.06-1.06l5-5Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "ChevronUpThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M11.293 8.793a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 10.914l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "ChevronUpThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M11.646 9.146a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1-.708.708L12 10.207l-4.646 4.647a.5.5 0 0 1-.708-.708l5-5Z"
      clipRule="evenodd"
    />
  ),
});

export const ChevronUp: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
