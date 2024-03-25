/**
 * Based on Carousel from: https://codesandbox.io/s/dd8vn
 */

import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";

import { useMediaQuery, useTheme } from "@chakra-ui/react";

import { Item } from "./Item";
import { Track, TrackProps } from "./Track";
import { Slider } from "./Slider";

interface CarouselProps {
  children: ReactNode[];
  gap: number;
  itemWidth?: number;
}

export const Carousel: FC<
  CarouselProps &
    Pick<TrackProps, "enableLeftPeek" | "enableSingleTransitionBehavior">
> = ({
  children,
  gap,
  enableLeftPeek,
  enableSingleTransitionBehavior,
  ...rest
}) => {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(rest.itemWidth ?? 0);

  const positions = useMemo(
    () =>
      React.Children.map(
        children,
        (_: ReactNode, index: number) => -Math.abs((itemWidth + gap) * index)
      ),
    [children, itemWidth, gap]
  );

  const { breakpoints } = useTheme();

  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
  );

  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
  );

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(rest.itemWidth ?? sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setItemWidth(rest.itemWidth ?? sliderWidth / 2 - gap);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(rest.itemWidth ?? sliderWidth / 3 - gap);
      setMultiplier(0.35);
      setConstraint(3);
    }
  }, [
    isBetweenBaseAndMd,
    isBetweenMdAndXl,
    isGreaterThanXL,
    sliderWidth,
    gap,
    rest.itemWidth,
  ]);

  return (
    <Slider
      setTrackIsActive={setTrackIsActive}
      initSliderWidth={setSliderWidth}
      setActiveItem={setActiveItem}
      activeItem={activeItem}
      constraint={constraint}
      itemWidth={itemWidth}
      positions={positions}
      gap={gap}
    >
      <Track
        setTrackIsActive={setTrackIsActive}
        trackIsActive={trackIsActive}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
        constraint={constraint}
        multiplier={multiplier}
        itemWidth={itemWidth}
        positions={positions}
        gap={gap}
        enableLeftPeek={enableLeftPeek}
        enableSingleTransitionBehavior={enableSingleTransitionBehavior}
      >
        {children.map((child: ReactNode, index: number) => (
          <Item
            setTrackIsActive={setTrackIsActive}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
            constraint={constraint}
            itemWidth={itemWidth}
            positions={positions}
            gap={gap}
            index={index}
            key={index}
          >
            {child}
          </Item>
        ))}
      </Track>
    </Slider>
  );
};
