import { createIcon } from "@chakra-ui/react";

const AnimatedCheck = createIcon({
  displayName: "AnimatedCheck",
  defaultProps: {
    width: "28px",
    height: "28px",
  },
  viewBox: "-2 -2 28 28",
  path: [
    <circle
      key={0}
      cx="11.8"
      cy="11.7"
      r="11.6667"
      fill="#06A576"
      className="ac-circle"
    />,
    <rect
      key={1}
      className="ac-line1"
      x="-5.5"
      y="17"
      width="2"
      height="10"
      fill="white"
      transform="rotate(-133.8 2.2 12.85)"
    />,
    <rect
      key={2}
      className="ac-line2"
      x="-1.3"
      y="13.7"
      width="2.1"
      height="5.5"
      transform="rotate(-44.5 0.1 3)"
      fill="white"
    />,
    <style key={3}>{`
      @keyframes animatedcheck {
        0%    { opacity: 0.3; }
        100%  { opacity: 1; }
      }
      @keyframes animatedcheckline1 {
        0%    { height: 0; }
        50%  { height: 0; }
        100%  { height: 10px; }
      }
      @keyframes animatedcheckline2 {
        0%    { height: 0; }
        40%    { height: 5.5px; }
        100%  { height: 5.5px; }
      }
      .ac-circle {
        animation: animatedcheck 1s ease-out;
      }
      .ac-line1 {
        animation: animatedcheckline1 0.5s ease-out;
      }
      .ac-line2 {
        animation: animatedcheckline2 0.5s ease-out;
      }
    `}</style>,
  ],
});

export { AnimatedCheck };
