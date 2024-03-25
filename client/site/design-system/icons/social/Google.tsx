import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Light = createIcon({
  displayName: "GoogleLight",
  viewBox: "0 0 48 48",
  path: [
    <g fill="#F3F3F3" clipPath="url(#a)" key="0">
      <path d="M11.137 19.58A14.151 14.151 0 0 1 24.61 9.869c3.385 0 6.432 1.2 8.841 3.16l6.966-6.975c-4.247-3.713-9.703-6-15.816-6-9.46 0-17.606 5.4-21.516 13.303l8.053 6.225ZM32.681 36.08c-2.184 1.407-4.95 2.157-8.081 2.157a14.15 14.15 0 0 1-13.444-9.647L3.075 34.72A23.922 23.922 0 0 0 24.6 48.052c5.869 0 11.475-2.08 15.666-6l-7.585-5.971Z" />
      <path d="M40.266 42.053c4.387-4.097 7.237-10.19 7.237-18 0-1.416-.215-2.944-.544-4.36H24.6v9.272h12.872c-.638 3.122-2.344 5.531-4.79 7.116l7.584 5.972ZM11.156 28.59a14.21 14.21 0 0 1-.74-4.538c0-1.565.253-3.065.712-4.471l-8.053-6.226C1.472 16.572.6 20.2.6 24.052c0 3.835.89 7.463 2.475 10.67l8.081-6.132Z" />
    </g>,
    <defs key="1">
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>,
  ],
});

const Dark = createIcon({
  displayName: "GoogleDark",
  viewBox: "0 0 48 48",
  path: [
    <path
      key="0"
      fill="#EA4335"
      d="M11.137 19.58A14.151 14.151 0 0 1 24.61 9.869c3.385 0 6.432 1.2 8.841 3.16l6.966-6.975c-4.247-3.713-9.703-6-15.816-6-9.46 0-17.606 5.4-21.516 13.303l8.053 6.225Z"
    />,
    <path
      key="1"
      fill="#34A853"
      d="M32.681 36.08c-2.184 1.407-4.95 2.157-8.081 2.157a14.15 14.15 0 0 1-13.444-9.647L3.075 34.72A23.922 23.922 0 0 0 24.6 48.052c5.869 0 11.475-2.08 15.666-6l-7.585-5.971Z"
    />,
    <path
      key="2"
      fill="#4A90E2"
      d="M40.266 42.053c4.387-4.097 7.237-10.19 7.237-18 0-1.416-.215-2.944-.544-4.36H24.6v9.272h12.872c-.638 3.122-2.344 5.531-4.79 7.116l7.584 5.972Z"
    />,
    <path
      key="3"
      fill="#FBBC05"
      d="M11.156 28.59a14.21 14.21 0 0 1-.74-4.538c0-1.565.253-3.065.712-4.471l-8.053-6.226C1.472 16.572.6 20.2.6 24.052c0 3.835.89 7.463 2.475 10.67l8.081-6.132Z"
    />,
    <defs key="4">
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>,
  ],
});

export const Google: FC<IconProps> = ({ colorMode = "light", ...rest }) => {
  const COLOR_MODES = {
    light: Light,
    dark: Dark,
  };

  const Component = COLOR_MODES[colorMode];
  return <Component {...rest} />;
};
