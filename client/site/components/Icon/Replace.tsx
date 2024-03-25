import { createIcon } from "@chakra-ui/react";

export const Replace = createIcon({
  displayName: "Replace",
  viewBox: "0 0 24 24",
  defaultProps: {
    width: 4,
    height: 4,
    fill: "none",
    stroke: "icon.primary",
  },
  path: [
    <path
      key={0}
      d="M21 11C20.7249 8.98452 19.8065 7.11704 18.3862 5.68522C16.966 4.25341 15.1227 3.33669 13.1404 3.07629C11.158 2.81589 9.14658 3.22624 7.41585 4.24415C5.68513 5.26205 4.33116 6.83103 3.5625 8.7094M3 4.12819V8.7094H7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,

    <path
      key={1}
      d="M3 13C3.27513 15.0155 4.19355 16.883 5.61378 18.3148C7.03402 19.7466 8.87727 20.6633 10.8596 20.9237C12.842 21.1841 14.8534 20.7738 16.5841 19.7559C18.3149 18.738 19.6688 17.169 20.4375 15.2906M21 19.8718V15.2906H16.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});
