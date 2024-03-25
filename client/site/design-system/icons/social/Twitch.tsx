import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Light = createIcon({
  displayName: "TwitchLight",
  viewBox: "0 0 48 48",
  path: [
    <path
      key="0"
      fill="#F3F3F3"
      d="M12.002 0 3.43 8.571V39.43h10.286V48l8.571-8.571h6.857L44.573 24V0H12Zm29.142 22.286-6.857 6.857H27.43l-6 6v-6h-7.714V3.429h27.428v18.857Z"
    />,
    <path
      key="1"
      fill="#F3F3F3"
      d="M36.001 9.429h-3.428v10.285H36V9.43ZM26.573 9.429h-3.429v10.285h3.429V9.43Z"
    />,
  ],
});

const Dark = createIcon({
  displayName: "TwitchDark",
  viewBox: "0 0 48 48",
  path: [
    <path
      key="0"
      fill="#6441A5"
      d="M12.002 0 3.43 8.571V39.43h10.286V48l8.571-8.571h6.857L44.573 24V0H12Zm29.142 22.286-6.857 6.857H27.43l-6 6v-6h-7.714V3.429h27.428v18.857Z"
    />,
    <path
      key="1"
      fill="#6441A5"
      d="M36.001 9.429h-3.428v10.285H36V9.43ZM26.573 9.429h-3.429v10.285h3.429V9.43Z"
    />,
  ],
});

export const Twitch: FC<IconProps> = ({ colorMode = "light", ...rest }) => {
  const COLOR_MODES = {
    light: Light,
    dark: Dark,
  };

  const Component = COLOR_MODES[colorMode];
  return <Component {...rest} />;
};
