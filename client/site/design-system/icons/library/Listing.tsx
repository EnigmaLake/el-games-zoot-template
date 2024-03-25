import { createIcon } from "@chakra-ui/icon";
import { IconProps } from "../../types/shared";
import { FC } from "react";

const Default = createIcon({
  displayName: "ListingDefault",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M7.8 8.9c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6.4-.4 1.2-.4 1.6 0 .4.4.4 1.2 0 1.6-.2.2-.5.3-.8.3Z" />
      <path d="M13.7 21.5c-.7 0-1.4-.3-1.9-.8l-9-9c-.5-.5-.8-1.2-.8-1.9V7c0-.7.3-1.4.8-1.9l2.3-2.3C5.6 2.3 6.3 2 7 2h2.8c.7 0 1.4.3 2 .8l8.9 8.9c1.1 1.1 1.1 2.8 0 3.9l-5.1 5.1c-.5.5-1.2.8-1.9.8Zm-6.6-18c-.3 0-.6.1-.9.4L3.9 6.1c-.2.2-.3.6-.3.9v2.8c0 .3.1.6.4.9l8.9 8.9c.5.5 1.3.5 1.8 0l5.1-5.1c.5-.5.5-1.3 0-1.8l-9-8.9c-.2-.2-.6-.4-.9-.4l-2.8.1Z" />
    </>
  ),
});

const Thick = createIcon({
  displayName: "ListingThick",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M8 9.4c-.4 0-.7-.1-1-.4-.5-.5-.5-1.4 0-2 .5-.5 1.4-.5 2 0 .5.5.5 1.4 0 2-.3.3-.6.4-1 .4Z" />
      <path d="M13.9 22c-.8 0-1.6-.3-2.1-.9l-8.9-8.9c-.6-.6-.9-1.3-.9-2.1V7.3c0-.8.3-1.5.9-2.1l2.3-2.3c.5-.6 1.2-.9 2-.9H10c.8 0 1.6.3 2.1.9l8.9 8.9c1.2 1.2 1.2 3.1 0 4.2l-5 5.1c-.5.6-1.3.9-2.1.9ZM7.3 4c-.3 0-.5.1-.7.3L4.3 6.6c-.2.2-.3.4-.3.7v2.8c0 .3.1.5.3.7l8.9 8.9c.4.4 1 .4 1.4 0l5.1-5.1c.4-.4.4-1 0-1.4l-8.9-8.9c-.2-.2-.4-.3-.7-.3H7.3Z" />
    </>
  ),
});

const Thin = createIcon({
  displayName: "CardStackThick",
  defaultProps: {
    fill: "#F3F3F3",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        fillRule="evenodd"
        d="M7.41 7.405a.889.889 0 1 1 1.257 1.258.889.889 0 0 1-1.258-1.258Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.158 3.934a1.483 1.483 0 0 0-1.06-.434l-2.85.025a1.48 1.48 0 0 0-1.034.434l-2.28 2.28A1.482 1.482 0 0 0 3.5 7.288V10.1c0 .393.156.77.434 1.047l8.91 8.915a1.5 1.5 0 0 0 2.123 0l5.094-5.097a1.5 1.5 0 0 0 0-2.122l-8.903-8.908ZM10.088 2.5a2.483 2.483 0 0 1 1.776.726l8.905 8.908a2.5 2.5 0 0 1 0 3.537l-5.094 5.096a2.5 2.5 0 0 1-3.538 0l-8.91-8.913a2.481 2.481 0 0 1-.727-1.755V7.287c0-.658.262-1.29.726-1.754l2.28-2.281a2.479 2.479 0 0 1 1.734-.727"
        clipRule="evenodd"
      />
    </>
  ),
});

export const Listing: FC<IconProps> = ({ variant = "default", ...rest }) => {
  const VARIANTS = {
    default: Default,
    thick: Thick,
    thin: Thin,
  };

  const Component = VARIANTS[variant];
  return <Component {...rest} />;
};
