import { createIcon } from "@chakra-ui/react";

const PriceTag = createIcon({
  displayName: "PriceTag",
  defaultProps: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 4,
    height: 4,
  },
  viewBox: "0 0 16 16",
  path: [
    <path
      key={0}
      d="M5.5421 5.17263C5.64338 5.27391 5.64338 5.43811 5.5421 5.53938C5.44082 5.64066 5.27662 5.64066 5.17535 5.53938C5.07407 5.43811 5.07407 5.27391 5.17535 5.17263C5.27662 5.07136 5.44082 5.07136 5.5421 5.17263"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key={1}
      fill="transparent"
      clipRule="evenodd"
      d="M4.82933 2.01666L6.72867 2C7.08267 1.99666 7.42333 2.13666 7.674 2.38666L13.61 8.32533C14.1307 8.846 14.1307 9.69066 13.61 10.2113L10.214 13.6093C9.69333 14.1307 8.848 14.1307 8.32733 13.6093L2.38667 7.66666C2.13933 7.41933 2 7.08333 2 6.73266V4.858C2 4.50733 2.13933 4.17133 2.38667 3.924L3.90667 2.40333C4.152 2.158 4.48333 2.01933 4.82933 2.01666Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});

export default PriceTag;
