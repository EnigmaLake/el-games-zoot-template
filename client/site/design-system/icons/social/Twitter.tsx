import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Light = createIcon({
  displayName: "TwitterLight",
  viewBox: "0 0 48 48",
  path: [
    <path
      key="0"
      fill="#F3F3F3"
      d="M15.1 43.5c18.11 0 28.017-15.007 28.017-28.016 0-.422-.01-.853-.029-1.275A20 20 0 0 0 48 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 0 0 4.33-5.445 19.795 19.795 0 0 1-6.251 2.39 9.86 9.86 0 0 0-16.788 8.979A27.97 27.97 0 0 1 3.346 6.299 9.859 9.859 0 0 0 6.393 19.44a9.86 9.86 0 0 1-4.462-1.228v.122a9.844 9.844 0 0 0 7.901 9.656 9.788 9.788 0 0 1-4.442.169 9.867 9.867 0 0 0 9.195 6.843A19.75 19.75 0 0 1 0 39.078 27.937 27.937 0 0 0 15.1 43.5Z"
    />,
    <defs key="1">
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>,
  ],
});

const Dark = createIcon({
  displayName: "TwitterDark",
  viewBox: "0 0 48 48",
  path: [
    <path
      key="0"
      fill="#1DA1F2"
      d="M15.1 43.5c18.11 0 28.017-15.007 28.017-28.016 0-.422-.01-.853-.029-1.275A20 20 0 0 0 48 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 0 0 4.33-5.445 19.795 19.795 0 0 1-6.251 2.39 9.86 9.86 0 0 0-16.788 8.979A27.97 27.97 0 0 1 3.346 6.299 9.859 9.859 0 0 0 6.393 19.44a9.86 9.86 0 0 1-4.462-1.228v.122a9.844 9.844 0 0 0 7.901 9.656 9.788 9.788 0 0 1-4.442.169 9.867 9.867 0 0 0 9.195 6.843A19.75 19.75 0 0 1 0 39.078 27.937 27.937 0 0 0 15.1 43.5Z"
    />,
    <defs key="1">
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>,
  ],
});

export const Twitter: FC<IconProps> = ({ colorMode = "light", ...rest }) => {
  const COLOR_MODES = {
    light: Light,
    dark: Dark,
  };

  const Component = COLOR_MODES[colorMode];
  return <Component {...rest} />;
};
