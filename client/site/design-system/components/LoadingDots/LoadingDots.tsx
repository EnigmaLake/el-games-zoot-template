import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

const dotFlashing = keyframes`
0% {
    background-color: white;
  }
  50%, 100% {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LoadingDots = ({
  dotSize = "0.5rem",
  speed = 0.75,
}: {
  dotSize?: string;
  speed?: number;
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${dotFlashing} infinite ${speed}s alternate`;

  const dotStyle = {
    width: dotSize,
    height: dotSize,
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 0.125rem",
    animationDelay: "0.5s",
  };

  const dotStyle2 = {
    ...dotStyle,
    animationDelay: "1s",
  };

  const dotStyle3 = {
    ...dotStyle,
    animationDelay: "1.5s",
  };

  return (
    <Box ml="1" data-testid="loading-dots">
      <Box style={dotStyle} animation={animation} />
      <Box style={dotStyle2} animation={animation} />
      <Box style={dotStyle3} animation={animation} />
    </Box>
  );
};

export default LoadingDots;
