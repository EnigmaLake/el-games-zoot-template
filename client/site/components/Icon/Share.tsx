import { createIcon } from "@chakra-ui/react";

const Share = createIcon({
  displayName: "Share",
  viewBox: "0 0 36 36",
  defaultProps: {
    width: 9,
    height: 9,
    stroke: "grayscale.white",
    xmlns: "http://www.w3.org/2000/svg",
  },
  path: [
    <path
      key={0}
      d="M12.83 15.17a4 4 0 1 1-5.658 5.658 4 4 0 0 1 5.657-5.657M28.83 7.172a4 4 0 1 1-5.658 5.657 4 4 0 0 1 5.657-5.657M28.83 23.17a4 4 0 1 1-5.658 5.658 4 4 0 0 1 5.657-5.657M13.56 16.215l8.88-4.44M13.56 19.785l8.88 4.44"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />,
  ],
});

export { Share };
