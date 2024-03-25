import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ChevronRightDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: (
    <path d="M8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967Z" />
  ),
});

const Thick = createIcon({
  displayName: "ChevronRightThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: (
    <path d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z" />
  ),
});

const Thin = createIcon({
  displayName: "ChevronRightThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: (
    <path d="M9.14645 6.64645C9.34171 6.45118 9.65829 6.45118 9.85355 6.64645L14.8536 11.6464C15.0488 11.8417 15.0488 12.1583 14.8536 12.3536L9.85355 17.3536C9.65829 17.5488 9.34171 17.5488 9.14645 17.3536C8.95118 17.1583 8.95118 16.8417 9.14645 16.6464L13.7929 12L9.14645 7.35355C8.95118 7.15829 8.95118 6.84171 9.14645 6.64645Z" />
  ),
});

export const ChevronRight: FC<IconProps> = ({
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
