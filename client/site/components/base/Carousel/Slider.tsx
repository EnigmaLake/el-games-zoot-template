import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Box, useDimensions } from "@chakra-ui/react";

interface SliderProps {
  setTrackIsActive: (value: boolean) => void;
  initSliderWidth: (value: number) => void;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  multiplier?: number;
  itemWidth: number;
  positions: number[] | null | undefined;
  index?: number;
  gap: number;
  showHandles?: boolean;
}

// https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
const SliderWrapper: FC<PropsWithChildren<SliderProps>> = ({
  initSliderWidth,
  children,
  gap,
}) => {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef, true);

  useLayoutEffect(() => {
    initSliderWidth(Math.round(dimensions?.contentBox.width ?? 1));
  }, [dimensions?.contentBox.width, initSliderWidth]);

  return (
    <Box
      ref={containerRef}
      w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
      ml={{ base: 0, md: `-${gap / 2}px` }}
      px={{
        base: 0,
        md: `${gap / 2}px`,
      }}
      position="relative"
      overflow="hidden"
      _before={{
        bgGradient: "linear(to-r, base.d400, transparent)",
        position: "absolute",
        w: `${gap / 2}px`,
        content: "''",
        zIndex: 1,
        h: "100%",
        left: 0,
        top: 0,
      }}
      _after={{
        bgGradient: "linear(to-l, base.d400, transparent)",
        position: "absolute",
        w: `${gap / 2}px`,
        content: "''",
        zIndex: 1,
        h: "100%",
        right: 0,
        top: 0,
      }}
    >
      {children}
    </Box>
  );
};

export const Slider: FC<PropsWithChildren<SliderProps>> = (props) => {
  const { children } = props;
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  if (!clientLoaded) {
    return <>{children}</>;
  }

  return <SliderWrapper {...props}>{children}</SliderWrapper>;
};
