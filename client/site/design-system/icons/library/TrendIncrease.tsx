import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "TrendIncreaseDefault",
  defaultProps: {
    fill: "#F3F3F3",
    width: 24,
    height: 24,
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M11.604 7.691a.5.5 0 0 1 .792 0l5.913 7.68a.5.5 0 0 1-.396.805H6.088a.5.5 0 0 1-.396-.805l5.912-7.68Z" />
      <path d="M11.604 7.691a.5.5 0 0 1 .792 0l5.913 7.68a.5.5 0 0 1-.396.805H6.088a.5.5 0 0 1-.396-.805l5.912-7.68Z" />
    </>
  ),
});

const Thick = createIcon({
  displayName: "TrendIncreaseThick",
  defaultProps: {
    fill: "#F3F3F3",
    width: 24,
    height: 24,
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M11.604 7.691a.5.5 0 0 1 .792 0l5.913 7.68a.5.5 0 0 1-.396.805H6.088a.5.5 0 0 1-.396-.805l5.912-7.68Z" />
      <path d="M11.604 7.691a.5.5 0 0 1 .792 0l5.913 7.68a.5.5 0 0 1-.396.805H6.088a.5.5 0 0 1-.396-.805l5.912-7.68Z" />
    </>
  ),
});

const Thin = createIcon({
  displayName: "TrendIncreaseThin",
  defaultProps: {
    fill: "#F3F3F3",
    width: 24,
    height: 24,
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        fill="#F3F3F3"
        d="M11.604 7.691a.5.5 0 0 1 .792 0l5.913 7.68a.5.5 0 0 1-.396.805H6.088a.5.5 0 0 1-.396-.805l5.912-7.68Z"
      />
      <path
        fill="#F3F3F3"
        d="M11.604 7.691a.5.5 0 0 1 .792 0l5.913 7.68a.5.5 0 0 1-.396.805H6.088a.5.5 0 0 1-.396-.805l5.912-7.68Z"
      />
    </>
  ),
});

export const TrendIncrease: FC<IconProps> = ({
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
