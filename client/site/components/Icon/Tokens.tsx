import { createIcon } from "@chakra-ui/react";

const Tokens = createIcon({
  displayName: "Tokens",
  defaultProps: {
    fill: "none",
    width: "2.063rem", // 33px
    height: "2.063rem", // 33px
    stroke: "white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  viewBox: "0 0 33 33",
  path: [
    <path
      key="0"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.667 11.176V21.824C28.667 22.78 28.155 23.6626 27.3257 24.1373L17.9923 29.48C17.171 29.9493 16.163 29.9493 15.3417 29.48L6.00833 24.1373C5.17899 23.6626 4.66699 22.78 4.66699 21.824V11.176C4.66699 10.22 5.17899 9.3373 6.00833 8.86264L15.3417 3.51997C16.163 3.05064 17.171 3.05064 17.9923 3.51997L27.3257 8.86264C28.155 9.3373 28.667 10.22 28.667 11.176Z"
    />,
    <rect
      key="1"
      x="9.21484"
      y="16.5"
      width="10.539"
      height="10.539"
      rx="1"
      transform="rotate(-45 9.21484 16.5)"
      strokeWidth="1.5"
    />,
  ],
});

export { Tokens };
