import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "CardStack2Default",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <path
      fillRule="evenodd"
      d="M4.69.72a2.75 2.75 0 0 0-2.75 2.75V14.9a2.75 2.75 0 0 0 2.75 2.75h4.052v2.886a2.75 2.75 0 0 0 2.75 2.75h7.822a2.75 2.75 0 0 0 2.75-2.75V9.106a2.75 2.75 0 0 0-2.75-2.75h-4.051V3.47a2.75 2.75 0 0 0-2.75-2.75H4.69Zm10.573 7.136V14.9a2.75 2.75 0 0 1-2.75 2.75h-2.27v2.886c0 .69.559 1.25 1.25 1.25h7.821c.69 0 1.25-.56 1.25-1.25V9.106c0-.69-.56-1.25-1.25-1.25h-4.051ZM3.44 3.47c0-.69.56-1.25 1.25-1.25h7.823c.69 0 1.25.56 1.25 1.25V14.9c0 .69-.56 1.25-1.25 1.25H4.69c-.69 0-1.25-.56-1.25-1.25V3.47Z"
      clipRule="evenodd"
    />
  ),
});

const Thick = createIcon({
  displayName: "CardStack2Thick",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <path
      fillRule="evenodd"
      d="M4.69.46a3 3 0 0 0-3 3v11.43a3 3 0 0 0 3 3h3.802v2.636a3 3 0 0 0 3 3h7.822a3 3 0 0 0 3-3V9.096a3 3 0 0 0-3-3h-3.801V3.46a3 3 0 0 0-3-3H4.69Zm10.823 7.636v6.793a3 3 0 0 1-3 3h-2.02v2.637a1 1 0 0 0 1 1h7.821a1 1 0 0 0 1-1V9.096a1 1 0 0 0-1-1h-3.801ZM3.69 3.46a1 1 0 0 1 1-1h7.823a1 1 0 0 1 1 1v11.43a1 1 0 0 1-1 1H4.69a1 1 0 0 1-1-1V3.46Z"
      clipRule="evenodd"
    />
  ),
});

const Thin = createIcon({
  displayName: "CardStack2Thin",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <path
      fillRule="evenodd"
      d="M4.69.97a2.5 2.5 0 0 0-2.5 2.5V14.9a2.5 2.5 0 0 0 2.5 2.5h4.302v3.136a2.5 2.5 0 0 0 2.5 2.5h7.822a2.5 2.5 0 0 0 2.5-2.5V9.106a2.5 2.5 0 0 0-2.5-2.5h-4.301V3.47a2.5 2.5 0 0 0-2.5-2.5H4.69Zm10.323 6.636V14.9a2.5 2.5 0 0 1-2.5 2.5h-2.52v3.136a1.5 1.5 0 0 0 1.5 1.5h7.821a1.5 1.5 0 0 0 1.5-1.5V9.106a1.5 1.5 0 0 0-1.5-1.5h-4.301ZM3.19 3.47a1.5 1.5 0 0 1 1.5-1.5h7.823a1.5 1.5 0 0 1 1.5 1.5V14.9a1.5 1.5 0 0 1-1.5 1.5H4.69a1.5 1.5 0 0 1-1.5-1.5V3.47Z"
      clipRule="evenodd"
    />
  ),
});

export const CardStack2: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
