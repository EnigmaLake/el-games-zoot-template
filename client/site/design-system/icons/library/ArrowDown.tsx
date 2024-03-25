import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ArrowDownDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M12 19.75a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-1.5 0v14c0 .414.336.75.75.75Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M11.47 19.53a.75.75 0 0 0 1.06 0l7-7a.75.75 0 1 0-1.06-1.06L12 17.94l-6.47-6.47a.75.75 0 0 0-1.06 1.06l7 7Z"
      clipRule="evenodd"
    />,
  ],
});

const Thick = createIcon({
  displayName: "ArrowDownThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M12 20a1 1 0 0 0 1-1V5a1 1 0 1 0-2 0v14a1 1 0 0 0 1 1Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fillRule="evenodd"
      d="M11.293 19.707a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414L12 17.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7Z"
      clipRule="evenodd"
    />,
  ],
});

const Thin = createIcon({
  displayName: "ArrowDownThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "#F3F3F3",
  },
  path: [
    <path
      key="0"
      fillRule="evenodd"
      d="M12 19.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-1 0v14a.5.5 0 0 0 .5.5Z"
      clipRule="evenodd"
    />,
    <path
      key="1"
      fill="#F3F3F3"
      fillRule="evenodd"
      d="M11.646 19.354a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L12 18.293l-6.646-6.647a.5.5 0 0 0-.708.708l7 7Z"
      clipRule="evenodd"
    />,
  ],
});

export const ArrowDown: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
