import { createIcon } from "@chakra-ui/react";

export const Mobile = createIcon({
  displayName: "MobileDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    height: 4,
    width: 4,
  },
  path: [
    <rect
      key="0"
      x="8"
      y="2"
      width="4"
      height="0.5"
      rx="0.25"
      fill="currentColor"
    />,
    <rect
      key="1"
      x="4.5"
      y="0.5"
      width="11"
      height="19"
      rx="1.5"
      stroke="currentColor"
    />,
    <rect
      key="2"
      x="9"
      y="17"
      width="2"
      height="1"
      rx="0.5"
      fill="currentColor"
    />,
    <line key="3" x1="4" y1="3.5" x2="16" y2="3.5" stroke="currentColor" />,
    <line key="4" x1="4" y1="15.5" x2="16" y2="15.5" stroke="currentColor" />,
  ],
});
