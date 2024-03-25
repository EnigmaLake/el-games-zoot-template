import { createIcon } from "@chakra-ui/react";

const TrendingDown = createIcon({
  displayName: "TrendingDown",
  viewBox: "0 0 7 5",
  defaultProps: {
    width: 2, // 8px
    height: 1.5, // 6px
    fill: "error.primary",
    xmlns: "http://www.w3.org/2000/svg",
  },
  path: (
    <path d="M3.45333 4.23532C3.25318 4.49532 2.86108 4.49532 2.66093 4.23532L0.212714 1.055C-0.0403846 0.726214 0.193997 0.250001 0.608917 0.250001L5.50534 0.250001C5.92026 0.250001 6.15464 0.726213 5.90154 1.055L3.45333 4.23532Z" />
  ),
});

export default TrendingDown;
