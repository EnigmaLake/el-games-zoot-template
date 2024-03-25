import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "GlobeDefault",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1.25 12a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8.75 12A14.55 14.55 0 0 0 12 20.851 14.55 14.55 0 0 0 15.25 12 14.55 14.55 0 0 0 12 3.149 14.55 14.55 0 0 0 8.75 12ZM12 2l-.554-.506A16.05 16.05 0 0 0 7.25 12.016a16.05 16.05 0 0 0 4.196 10.49.75.75 0 0 0 1.108 0 16.05 16.05 0 0 0 4.196-10.522 16.05 16.05 0 0 0-4.196-10.49L12 2Z"
        clipRule="evenodd"
      />
    </>
  ),
});

const Thick = createIcon({
  displayName: "GlobeThick",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        fillRule="evenodd"
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9 12a14.3 14.3 0 0 0 3 8.45A14.3 14.3 0 0 0 15 12a14.3 14.3 0 0 0-3-8.45A14.3 14.3 0 0 0 9 12Zm3-10-.738-.674A16.3 16.3 0 0 0 7 12.02a16.3 16.3 0 0 0 4.262 10.653 1 1 0 0 0 1.476 0A16.3 16.3 0 0 0 17 11.98a16.3 16.3 0 0 0-4.262-10.653L12 2Z"
        clipRule="evenodd"
      />
    </>
  ),
});

const Thin = createIcon({
  displayName: "GlobeThin",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        fillRule="evenodd"
        d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12Z"
        clipRule="evenodd"
      />
      <clipPath
        fillRule="evenodd"
        d="M1.5 12a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8.5 12a14.8 14.8 0 0 0 3.5 9.243A14.8 14.8 0 0 0 15.5 12 14.8 14.8 0 0 0 12 2.757 14.8 14.8 0 0 0 8.5 12ZM12 2l-.37-.337A15.8 15.8 0 0 0 7.5 12.01a15.8 15.8 0 0 0 4.13 10.327.5.5 0 0 0 .74 0A15.8 15.8 0 0 0 16.5 11.99a15.8 15.8 0 0 0-4.13-10.327L12 2Z"
        clipRule="evenodd"
      />
    </>
  ),
});

export const Globe: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
