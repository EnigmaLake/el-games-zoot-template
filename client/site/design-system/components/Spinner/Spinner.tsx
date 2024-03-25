import type { FC } from "react";
import type { SpinnerProps } from "./SpinnerProps";
import { keyframes } from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icon";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const SpinnerIcon = createIcon({
  displayName: "Spinner",
  viewBox: "0 0 12 12",
  defaultProps: {
    fill: "#F3F3F3",
    boxSize: "0.75rem", // 12px
  },
  path: [
    <mask
      key="0"
      id="mask0_6381_111071"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
    >
      <path
        d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6Z"
        fill="#ED5497"
      />
    </mask>,
    <g key="1" mask="url(#mask0_6381_111071)">
      <path d="M2.4644 2.4644C2.07391 2.07391 2.07006 1.43266 2.51991 1.11236C3.20761 0.622709 3.99412 0.281447 4.82946 0.115288C5.99334 -0.116223 7.19974 0.00259688 8.2961 0.456723C9.39246 0.910848 10.3295 1.67988 10.9888 2.66658C11.6481 3.65327 12 4.81331 12 6C12 7.18669 11.6481 8.34673 10.9888 9.33342C10.3295 10.3201 9.39246 11.0892 8.2961 11.5433C7.19975 11.9974 5.99335 12.1162 4.82946 11.8847C3.99412 11.7186 3.20762 11.3773 2.51992 10.8876C2.07006 10.5673 2.07391 9.92609 2.4644 9.53561V9.53561C2.85488 9.14512 3.4841 9.15861 3.95905 9.44037C4.3468 9.67039 4.77272 9.83445 5.2196 9.92334C5.99556 10.0777 6.79987 9.99847 7.53081 9.6957C8.26175 9.39294 8.8865 8.88022 9.32605 8.22239C9.76559 7.56456 10.0002 6.79116 10.0002 6C10.0002 5.20883 9.76559 4.43544 9.32604 3.77761C8.8865 3.11978 8.26175 2.60706 7.53081 2.3043C6.79987 2.00153 5.99556 1.92231 5.2196 2.07666C4.77272 2.16555 4.34679 2.32961 3.95905 2.55963C3.4841 2.84139 2.85488 2.85488 2.4644 2.4644V2.4644Z" />
    </g>,
  ],
});

export const Spinner: FC<SpinnerProps> = (props) => {
  let boxSize;
  switch (props.size) {
    case "2xl":
      boxSize = "3rem";
      break;
    case "xl":
      boxSize = "2rem";
      break;
    case "lg":
      boxSize = "1.5rem";
      break;
    case "md":
      boxSize = "1.25rem";
      break;
    case "sm":
      boxSize = "1rem";
      break;
    case "xs":
    default:
      boxSize = "0.75rem";
  }

  return (
    <SpinnerIcon
      animation={`${spin} 1s linear infinite`}
      boxSize={boxSize}
      {...props}
    />
  );
};
