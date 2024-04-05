import { createIcon } from "@chakra-ui/react";
import { legacy_colors } from "../../../style/sweeps_corp_legacy";
// TO DO: Remove reference to theme like this when we transition to the design system

const CircleExclamationMark = createIcon({
  displayName: "CircleExclamationMark",
  viewBox: "0 0 48 48",
  defaultProps: {
    width: "48px",
    height: "48px",
  },
  path: [
    <path
      key="0"
      d="M23.9998 48.0005C37.2547 48.0005 48 37.2552 48 24.0002C48 10.7453 37.2547 0 23.9998 0C10.7448 0 -0.000488281 10.7453 -0.000488281 24.0002C-0.000488281 37.2552 10.7448 48.0005 23.9998 48.0005Z"
      fill={`${legacy_colors.brand.red500}`}
      fillOpacity="0.3"
    />,
    <path
      key="1"
      d="M24 41.9941C33.9411 41.9941 42 33.9353 42 23.9941C42 14.053 33.9411 5.99414 24 5.99414C14.0589 5.99414 6 14.053 6 23.9941C6 33.9353 14.0589 41.9941 24 41.9941Z"
      fill={`${legacy_colors.brand.red500}`}
    />,
    <path
      key="2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.6754 16.748V15.0605H22.3004L22.3004 16.748L22.3004 24.7068L22.3004 26.3943H25.6754L25.6754 24.7068L25.6754 16.748ZM23.988 28.9187C22.8385 28.9187 21.9067 29.8506 21.9067 31C21.9067 32.1494 22.8385 33.0812 23.988 33.0812H24.0122C25.1617 33.0812 26.0935 32.1494 26.0935 31C26.0935 29.8506 25.1617 28.9187 24.0122 28.9187H23.988Z"
      fill={`${legacy_colors.brand.neutral50}`}
    />,
  ],
});

export default CircleExclamationMark;
