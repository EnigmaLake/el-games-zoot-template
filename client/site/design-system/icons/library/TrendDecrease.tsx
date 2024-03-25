import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "TrendDecreaseDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      d="M12.396 16.309a.5.5 0 0 1-.792 0l-5.912-7.68a.5.5 0 0 1 .396-.806h11.825a.5.5 0 0 1 .396.805l-5.913 7.68Z"
    />,
    <path
      key="1"
      d="M12.396 16.309a.5.5 0 0 1-.792 0l-5.912-7.68a.5.5 0 0 1 .396-.806h11.825a.5.5 0 0 1 .396.805l-5.913 7.68Z"
    />,
  ],
});

const Thick = createIcon({
  displayName: "TrendDecreaseThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      d="M12.396 16.309a.5.5 0 0 1-.792 0l-5.912-7.68a.5.5 0 0 1 .396-.806h11.825a.5.5 0 0 1 .396.805l-5.913 7.68Z"
    />,
    <path
      key="1"
      d="M12.396 16.309a.5.5 0 0 1-.792 0l-5.912-7.68a.5.5 0 0 1 .396-.806h11.825a.5.5 0 0 1 .396.805l-5.913 7.68Z"
    />,
  ],
});

const Thin = createIcon({
  displayName: "TrendDecreaseThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      d="M12.396 16.309a.5.5 0 0 1-.792 0l-5.912-7.68a.5.5 0 0 1 .396-.806h11.825a.5.5 0 0 1 .396.805l-5.913 7.68Z"
    />,
    <path
      key="1"
      d="M12.396 16.309a.5.5 0 0 1-.792 0l-5.912-7.68a.5.5 0 0 1 .396-.806h11.825a.5.5 0 0 1 .396.805l-5.913 7.68Z"
    />,
  ],
});

export const TrendDecrease: FC<IconProps> = ({
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
