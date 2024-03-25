import { createIcon } from "@chakra-ui/react";

const RotatingSemicircle = createIcon({
  displayName: "RotatingSemicircle",
  defaultProps: {
    width: "28px",
    height: "28px",
    className: "rotating",
    fill: "none",
  },
  viewBox: "0 0 28 28",
  path: [
    <circle key={0} cx="14.0002" cy="13.9987" r="11.6667" fill="#213356" />,
    <path
      key={1}
      d="M25.6667 13.9987C25.6667 7.55538 20.4433 2.33203 14 2.33203"
      stroke="#3F75FF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <style key={2}>{`
    @keyframes rotating {
      100%  { transform:rotate(360deg); }
    }
    .rotating {
      animation: rotating 1.5s ease-out infinite;
    }
    `}</style>,
  ],
});

export { RotatingSemicircle };
