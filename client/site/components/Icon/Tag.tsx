import { createIcon } from "@chakra-ui/react";

const Tag = createIcon({
  displayName: "Tag",
  viewBox: "0 0 25 24",
  defaultProps: {
    width: "25px",
    height: "24px",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "brand.gray50",
  },
  path: [
    <path
      key={0}
      d="M8.81217 7.75912C8.96409 7.91103 8.96409 8.15733 8.81217 8.30924C8.66026 8.46116 8.41396 8.46116 8.26204 8.30924C8.11013 8.15733 8.11013 7.91103 8.26204 7.75912C8.41396 7.6072 8.66026 7.6072 8.81217 7.75912"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key={1}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.744 3.02509L10.593 3.00009C11.124 2.99509 11.635 3.20509 12.011 3.58009L20.915 12.4881C21.696 13.2691 21.696 14.5361 20.915 15.3171L15.821 20.4141C15.04 21.1961 13.772 21.1961 12.991 20.4141L4.08 11.5001C3.709 11.1291 3.5 10.6251 3.5 10.0991V7.28709C3.5 6.76109 3.709 6.25709 4.08 5.88609L6.36 3.60509C6.728 3.23709 7.225 3.02909 7.744 3.02509Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});

export default Tag;
