import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "Check1Default",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M20.53 6.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L10 15.94l9.47-9.47a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "Check1Thick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 15.586l9.293-9.293a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "Check1Thin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: (
    <path
      fillRule="evenodd"
      d="M20.354 6.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 .708-.708L10 16.293l9.646-9.647a.5.5 0 0 1 .708 0Z"
      clipRule="evenodd"
    />
  ),
});

export const Check1: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
