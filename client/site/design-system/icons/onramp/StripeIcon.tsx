import { createIcon } from "@chakra-ui/react";

export const StripeIcon = createIcon({
  displayName: "Coinbase",
  viewBox: "0 0 150 150",
  defaultProps: {
    transform: "scale(2)",
  },
  path: [
    <path key="0" fill="#635BFF" d="M0 0h150v150H0z" />,
    <path
      key="1"
      fill="#fff"
      fill-rule="evenodd"
      d="M69.109 58.015c0-3.6 2.922-4.984 7.763-4.984 6.942 0 15.71 2.123 22.652 5.907V37.246C91.944 34.2 84.454 33 76.872 33 58.331 33 46 42.785 46 59.123c0 25.477 34.709 21.416 34.709 32.4 0 4.246-3.654 5.63-8.769 5.63-7.58 0-17.263-3.138-24.935-7.384v21.969C55.499 115.431 64.085 117 71.94 117 90.94 117 104 107.492 104 90.97c-.091-27.508-34.891-22.616-34.891-32.955Z"
      clip-rule="evenodd"
    />,
    <defs key="2">
      <clipPath id="a">
        <path fill="#fff" d="M0 0h150v150H0z" />
      </clipPath>
    </defs>,
  ],
});
