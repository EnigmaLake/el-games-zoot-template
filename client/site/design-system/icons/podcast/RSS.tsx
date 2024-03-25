import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Light = createIcon({
  displayName: "RSSLight",
  viewBox: "0 0 85 84",
  path: [
    <path
      key="0"
      fill="#fff"
      fillRule="evenodd"
      d="M16.25 0h52.5C77.448 0 84.5 7.052 84.5 15.75v52.5C84.5 76.948 77.448 84 68.75 84h-52.5C7.552 84 .5 76.948.5 68.25v-52.5C.5 7.052 7.552 0 16.25 0ZM11 21a52.501 52.501 0 0 1 52.5 52.5H74a63 63 0 0 0-63-63V21Zm22.274 30.226A31.5 31.5 0 0 0 11 42V31.5a42 42 0 0 1 42 42H42.5a31.5 31.5 0 0 0-9.226-22.274ZM32 63c0 5.799-4.701 10.5-10.5 10.5S11 68.799 11 63s4.701-10.5 10.5-10.5S32 57.201 32 63Z"
      clipRule="evenodd"
    />,
    <defs key="1">
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h84v84H.5z" />
      </clipPath>
    </defs>,
  ],
});

const Dark = createIcon({
  displayName: "RSSDark",
  viewBox: "0 0 85 84",
  path: [
    <path
      key="0"
      fill="orange"
      d="M68.75 0h-52.5C7.552 0 .5 7.052.5 15.75v52.5C.5 76.948 7.552 84 16.25 84h52.5c8.698 0 15.75-7.052 15.75-15.75v-52.5C84.5 7.052 77.448 0 68.75 0Z"
    />,
    <path
      key="1"
      fill="#fff"
      d="M21.5 73.5C27.299 73.5 32 68.799 32 63s-4.701-10.5-10.5-10.5S11 57.201 11 63s4.701 10.5 10.5 10.5Z"
    />,
    <path
      key="2"
      fill="#fff"
      d="M11 42a31.5 31.5 0 0 1 31.5 31.5H53a42 42 0 0 0-42-42V42Z"
    />,
    <path
      key="3"
      fill="#fff"
      d="M11 21a52.501 52.501 0 0 1 52.5 52.5H74a63 63 0 0 0-63-63V21Z"
    />,
    <defs key="1">
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h84v84H.5z" />
      </clipPath>
    </defs>,
  ],
});

export const RSS: FC<IconProps> = ({ colorMode = "light", ...rest }) => {
  const COLOR_MODES = {
    light: Light,
    dark: Dark,
  };

  const Component = COLOR_MODES[colorMode];
  return <Component {...rest} />;
};
