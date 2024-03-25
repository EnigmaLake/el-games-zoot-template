import { createIcon } from "@chakra-ui/react";

const CardDeck = createIcon({
  displayName: "CardDeck",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "none",
    width: 6,
    height: 6,
    stroke: "icon.primary",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: [
    <circle key="0" r="2" transform="matrix(-1 0 0 1 8.45996 13.6631)" />,
    <rect
      key="1"
      x="0.0996094"
      y="9.92188"
      width="11.2103"
      height="14.9471"
      rx="2"
      transform="rotate(-26.6317 0.0996094 9.92188)"
    />,
    <path
      key="2"
      d="M16.1381 17.3794V15.0273V9.70093V4.36523C16.1381 3.26066 15.2426 2.36523 14.1381 2.36523H6.92773C5.82316 2.36523 4.92773 3.26066 4.92773 4.36523V7.33212"
    />,
    <path
      key="3"
      d="M13.2906 19.9787L15.5575 21.1069C16.5529 21.6022 17.7611 21.1908 18.2473 20.191L23.0254 10.365C23.5088 9.37077 23.094 8.17289 22.0991 7.69067L16.2717 4.86599"
    />,
  ],
});

export { CardDeck };
