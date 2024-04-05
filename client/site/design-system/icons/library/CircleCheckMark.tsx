import { createIcon } from "@chakra-ui/react";
import { legacy_colors } from "../../../style/sweeps_corp_legacy";

const CircleCheckMark = createIcon({
  displayName: "CircleCheckMark",
  viewBox: "0 0 49 49",
  defaultProps: {
    width: 49,
    height: 49,
  },
  path: [
    <path
      key="0"
      d="M24.303 48.7681C37.5579 48.7681 48.3032 38.0228 48.3032 24.7678C48.3032 11.5129 37.5579 0.767578 24.303 0.767578C11.048 0.767578 0.302734 11.5129 0.302734 24.7678C0.302734 38.0228 11.048 48.7681 24.303 48.7681Z"
      fill={`${legacy_colors.status.success}`}
      fillOpacity="0.3"
    />,
    <path
      key="1"
      d="M24.3032 42.8379C34.2443 42.8379 42.3032 34.779 42.3032 24.8379C42.3032 14.8968 34.2443 6.83789 24.3032 6.83789C14.3621 6.83789 6.30322 14.8968 6.30322 24.8379C6.30322 34.779 14.3621 42.8379 24.3032 42.8379Z"
      fill={`${legacy_colors.status.success600}`}
    />,
    <svg
      key="2"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      x="14"
      y="14.5"
    >
      ,
      <rect
        x="3.28711"
        y="11.416"
        width="3"
        height="8.33755"
        transform="rotate(-45 3.28711 11.416)"
        fill={`${legacy_colors.grayscale.white}`}
      />
      <rect
        x="9.19629"
        y="17.2949"
        width="3"
        height="14.7552"
        transform="rotate(-135 9.19629 17.2949)"
        fill={`${legacy_colors.grayscale.white}`}
      />
    </svg>,
  ],
});

export default CircleCheckMark;
