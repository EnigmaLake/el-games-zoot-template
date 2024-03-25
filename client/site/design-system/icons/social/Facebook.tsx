import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Light = createIcon({
  displayName: "FacebookLight",
  viewBox: "0 0 48 48",
  path: (
    <path
      fill="#F3F3F3"
      d="M38.665 1.35c0-.74-.6-1.331-1.331-1.331h-6.666c-6.984-.347-12.937 5.015-13.331 12v7.2H10.67c-.74 0-1.331.6-1.331 1.331v6.919c0 .74.6 1.331 1.331 1.331h6.666v17.86c0 .73.6 1.33 1.331 1.33h7.997c.74 0 1.331-.6 1.331-1.33V28.81h6.985c.609.009 1.143-.394 1.303-.985l1.922-6.928a1.335 1.335 0 0 0-.938-1.631l-.337-.047h-8.935v-7.2a2.666 2.666 0 0 1 2.663-2.4h6.665c.741 0 1.332-.6 1.332-1.331V1.35h.009Z"
    />
  ),
});

const Dark = createIcon({
  displayName: "FacebookDark",
  viewBox: "0 0 48 48",
  path: (
    <path
      fill="#1877F2"
      d="M38.665 1.35c0-.74-.6-1.331-1.331-1.331h-6.666c-6.984-.347-12.937 5.015-13.331 12v7.2H10.67c-.74 0-1.331.6-1.331 1.331v6.919c0 .74.6 1.331 1.331 1.331h6.666v17.86c0 .73.6 1.33 1.331 1.33h7.997c.74 0 1.331-.6 1.331-1.33V28.81h6.985c.609.009 1.143-.394 1.303-.985l1.922-6.928a1.335 1.335 0 0 0-.938-1.631l-.337-.047h-8.935v-7.2a2.666 2.666 0 0 1 2.663-2.4h6.665c.741 0 1.332-.6 1.332-1.331V1.35h.009Z"
    />
  ),
});

export const Facebook: FC<IconProps> = ({ colorMode = "light", ...rest }) => {
  const COLOR_MODES = {
    light: Light,
    dark: Dark,
  };

  const Component = COLOR_MODES[colorMode];
  return <Component {...rest} />;
};
