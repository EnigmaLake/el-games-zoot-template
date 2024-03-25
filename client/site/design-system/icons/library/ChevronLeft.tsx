import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ChevronLeftDefault",
  viewBox: "0 0 16 16",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: (
    <path d="M10.0199 4.31442C10.2152 4.50968 10.2152 4.82626 10.0199 5.02152L7.04011 8.0013L10.0199 10.9811C10.2152 11.1763 10.2152 11.4929 10.0199 11.6882C9.82463 11.8835 9.50805 11.8835 9.31279 11.6882L5.97945 8.35486C5.78419 8.15959 5.78419 7.84301 5.97945 7.64775L9.31279 4.31442C9.50805 4.11915 9.82463 4.11915 10.0199 4.31442Z" />
  ),
});

const Thick = createIcon({
  displayName: "ChevronLeftThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: (
    <path d="M15.2071 6.29289C15.5976 6.68342 15.5976 7.31658 15.2071 7.70711L10.9142 12L15.2071 16.2929C15.5976 16.6834 15.5976 17.3166 15.2071 17.7071C14.8166 18.0976 14.1834 18.0976 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.1834 5.90237 14.8166 5.90237 15.2071 6.29289Z" />
  ),
});

const Thin = createIcon({
  displayName: "ChevronLeftThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: (
    <path d="M14.8536 6.64645C15.0488 6.84171 15.0488 7.15829 14.8536 7.35355L10.2071 12L14.8536 16.6464C15.0488 16.8417 15.0488 17.1583 14.8536 17.3536C14.6583 17.5488 14.3417 17.5488 14.1464 17.3536L9.14645 12.3536C8.95118 12.1583 8.95118 11.8417 9.14645 11.6464L14.1464 6.64645C14.3417 6.45118 14.6583 6.45118 14.8536 6.64645Z" />
  ),
});

export const ChevronLeft: FC<IconProps> = ({
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
