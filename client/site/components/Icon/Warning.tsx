import { createIcon } from "@chakra-ui/react";

const Warning = createIcon({
  displayName: "Warning",
  defaultProps: {
    width: 17,
    height: 17,
    fill: "none",
  },
  viewBox: "0 0 17 17",
  path: (
    <>
      <g clipPath="url(#clip0_4677_21834)">
        <path
          d="M6.96498 2.06277L0.674633 12.564C0.544941 12.7886 0.476318 13.0432 0.475592 13.3026C0.474866 13.5619 0.542061 13.817 0.670494 14.0423C0.798927 14.2676 0.984119 14.4554 1.20765 14.5869C1.43118 14.7184 1.68525 14.7891 1.94458 14.792H14.5253C14.7846 14.7891 15.0387 14.7184 15.2622 14.5869C15.4857 14.4554 15.6709 14.2676 15.7994 14.0423C15.9278 13.817 15.995 13.5619 15.9943 13.3026C15.9935 13.0432 15.9249 12.7886 15.7952 12.564L9.50488 2.06277C9.37248 1.84451 9.18607 1.66405 8.96362 1.53881C8.74118 1.41357 8.49021 1.34778 8.23493 1.34778C7.97965 1.34778 7.72868 1.41357 7.50623 1.53881C7.28379 1.66405 7.09737 1.84451 6.96498 2.06277V2.06277Z"
          fill="#FFCD59"
        />
        <path
          d="M8.23535 5.92395L8.23535 9.46118"
          stroke="#031124"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M8.23535 12.1902H8.24202"
          stroke="#031124"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4677_21834">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.235352 0.5)"
          />
        </clipPath>
      </defs>
    </>
  ),
});

export { Warning };
