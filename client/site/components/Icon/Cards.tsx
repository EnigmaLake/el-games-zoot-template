import { createIcon } from "@chakra-ui/react";

const Cards = createIcon({
  displayName: "Cards",
  defaultProps: {
    fill: "none",
    width: "2rem", // 32px
    height: "2.063rem", // 33px
    stroke: "white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  viewBox: "0 0 32 33",
  path: [
    <path
      key="0"
      d="M9.03523 23.4903C9.38653 23.9125 9.89135 24.1776 10.4383 24.2271L20.7638 25.1957C21.906 25.301 22.9182 24.4626 23.0274 23.3208L24.3716 8.85906C24.4735 7.71794 23.6368 6.70786 22.4967 6.59544L16.3319 6.0683"
    />,
    <path
      key="1"
      d="M12.1162 24.4622C12.1162 24.4622 12.1163 25.1476 12.3621 25.6388C12.6079 26.13 13.039 26.5032 13.5603 26.6761L23.3929 29.9735C24.481 30.3364 25.6577 29.7509 26.0244 28.664L30.6305 14.8897C30.9899 13.8018 30.4056 12.6276 29.3211 12.2582L24.7139 10.7687"
    />,
    <rect
      key="2"
      width="14.5207"
      height="18.6695"
      rx="1.55556"
      transform="matrix(-0.985716 0.168417 0.168417 0.985716 15.3789 2.57324)"
    />,
    <circle key="3" cx="9.79438" cy="12.7209" r="2.66596" />,
  ],
});

export { Cards };
