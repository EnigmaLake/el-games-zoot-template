import { FC } from "react";
import { createIcon } from "@chakra-ui/react";
import { IconProps } from "../../types/shared";

const Default = createIcon({
  displayName: "MailDefault",
  viewBox: "0 0 24 24",
  defaultProps: {
    height: 4,
    width: 4,
  },
  path: [
    <path
      key="0"
      fill="#F3F3F3"
      d="M1.25 5A.75.75 0 0 1 2 4.25h20a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V5Zm1.5.75v12.5h18.5V5.75H2.75Z"
    />,
    <path
      key="1"
      fill="#F3F3F3"
      d="m11.498 14.557-10-9 1.004-1.114L12 12.99l9.498-8.548 1.004 1.114-10 9a.75.75 0 0 1-1.004 0Z"
    />,
    <path
      key="2"
      fill="#F3F3F3"
      d="m9.564 11.494-7 8-1.128-.988 7-8 1.128.988ZM16.067 11.009l6.5 7.5-1.134.982-6.5-7.5 1.134-.982Z"
    />,
  ],
});

const Thick = createIcon({
  displayName: "MailThick",
  viewBox: "0 0 24 24",
  defaultProps: {
    height: 4,
    width: 4,
  },
  path: [
    <path
      key="0"
      fill="#F3F3F3"
      d="M1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5Zm2 1v12h18V6H3Z"
    />,
    <path
      key="1"
      fill="#F3F3F3"
      d="m11.331 14.743-10-9 1.338-1.486L12 12.655l9.331-8.398 1.338 1.486-10 9a1 1 0 0 1-1.338 0Z"
    />,
    <path
      key="2"
      fill="#F3F3F3"
      d="m9.753 11.659-7 8-1.506-1.317 7-8 1.506 1.316ZM16.256 10.845l6.5 7.5-1.512 1.31-6.5-7.5 1.512-1.31Z"
    />,
  ],
});

const Thin = createIcon({
  displayName: "MailThin",
  viewBox: "0 0 24 24",
  defaultProps: {
    height: 4,
    width: 4,
  },
  path: [
    <path
      key="0"
      fill="#F3F3F3"
      d="M1.5 5a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V5Zm1 .5v13h19v-13h-19Z"
    />,
    <path
      key="1"
      fill="#F3F3F3"
      d="m11.665 14.372-10-9 .67-.744 9.665 8.7 9.666-8.7.668.744-10 9a.5.5 0 0 1-.668 0Z"
    />,
    <path
      key="2"
      fill="#F3F3F3"
      d="m9.376 11.33-7 8-.752-.66 7-8 .752.66ZM15.878 11.172l6.5 7.5-.756.655-6.5-7.5.756-.655Z"
    />,
  ],
});

export const Mail: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
