import React, {
  FC,
  PropsWithChildren,
  SyntheticEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { Flex, VStack } from "@chakra-ui/react";

import {
  motion,
  PanInfo,
  Transition,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { usePreventMobileWindowScroll } from "../../../hooks/usePreventMobileWindowScroll";

const MotionFlex = motion(Flex);

const transitionProps: Transition = {
  stiffness: 400,
  type: "spring",
  damping: 60,
  mass: 3,
};

export interface TrackProps {
  setTrackIsActive: (value: boolean) => void;
  trackIsActive: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  multiplier: number;
  itemWidth: number;
  positions: number[] | null | undefined;
  index?: number;
  gap: number;
  enableLeftPeek?: boolean;
  /** @deprecated feature not ready for use. the user experience needs improvement*/
  enableSingleTransitionBehavior?: boolean;
}

export const Track: FC<PropsWithChildren<TrackProps>> = ({
  setTrackIsActive,
  trackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  multiplier,
  itemWidth,
  enableLeftPeek = false,
  enableSingleTransitionBehavior = false,
  children,
  gap,
  ...rest
}) => {
  const positions = useMemo(() => rest.positions ?? [], [rest.positions]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const { startPreventingWindowScroll, stopPreventingWindowScroll } =
    usePreventMobileWindowScroll();

  const handleDragStart = useCallback(() => {
    isDragging.current = true;
    setDragStartPosition(positions[activeItem]);
  }, [activeItem, positions]);

  const onDirectionDetermined = useCallback(
    (direction: string) => {
      if (direction === "x") {
        startPreventingWindowScroll();
      } else {
        stopPreventingWindowScroll();
      }
    },
    [startPreventingWindowScroll, stopPreventingWindowScroll]
  );

  const handleDragEnd = useCallback(
    async (_: SyntheticEvent, info: PanInfo) => {
      stopPreventingWindowScroll();

      // don't change item if vertical scroll bigger than horizontal
      if (Math.abs(info.offset.y) > Math.abs(info.offset.x)) {
        return;
      }

      const distance = info.offset.x;
      const velocity = info.velocity.x * multiplier;
      const direction = velocity < 0 || distance < 0 ? 1 : -1;

      if (enableSingleTransitionBehavior) {
        const positionIndex = activeItem + (direction === 1 ? 1 : -1);
        const isFinalPosition = positionIndex === positions.length - 1;
        setActiveItem(positionIndex);
        setCurrentPosition(positionIndex);
        controls.start({
          x: positions[positionIndex] + (isFinalPosition ? gap : 0),
          transition: {
            velocity: info.velocity.x,
            ...transitionProps,
          },
        });
      } else {
        const extrapolatedPosition =
          dragStartPosition +
          (direction === 1
            ? Math.min(velocity, distance)
            : Math.max(velocity, distance));

        const closestPosition = positions.reduce((prev, curr) => {
          return Math.abs(curr - extrapolatedPosition) <
            Math.abs(prev - extrapolatedPosition)
            ? curr
            : prev;
        }, 0);

        if (!(closestPosition < positions[positions.length - constraint])) {
          const positionIndex = positions.indexOf(closestPosition);
          const isFinalPosition = positionIndex === positions.length - 1;
          setActiveItem(positionIndex);
          setCurrentPosition(positionIndex);
          controls.start({
            x: isFinalPosition ? closestPosition + gap : closestPosition,
            transition: {
              velocity: info.velocity.x,
              ...transitionProps,
            },
          });
        } else {
          setActiveItem(positions.length - constraint);
          controls.start({
            x: positions[positions.length - constraint] + gap,
            transition: {
              velocity: info.velocity.x,
              ...transitionProps,
            },
          });
        }
      }
    },
    [
      constraint,
      controls,
      dragStartPosition,
      multiplier,
      positions,
      setActiveItem,
      stopPreventingWindowScroll,
      activeItem,
      enableSingleTransitionBehavior,
      gap,
    ]
  );

  // Both "dragging" and "clicking" begin/end with pressing and releasing the mouse button.
  // To avoid the accidental clicking of a carousel item (and kicking off any corresponding logic thereafter),
  // we determine if the user was in the middle of dragging the carousel prior to releasing the mouse button.
  // If so, short circuit the click from being propagated down to the carousel item.
  const onClickCapture = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);

  // On mobile, onClickCapture is only fired on a direct tap, not at the end of a drag event.
  // Since we leverage that to toggle the isDragging flag, this results in have to "double tap" on mobile when
  // the user actually needs to tap on something:
  //   - one tap to undo the isDragging flag
  //   - one tap to activate the interaction handler
  // We define this mobile-only handler so that the user doesn't have to "double tap" as described above.
  const onTouchEnd = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
    }
  }, []);

  return (
    <>
      {!!itemWidth && (
        <VStack
          ref={node}
          spacing={5}
          alignItems="stretch"
          pl={enableLeftPeek && currentPosition > 0 ? `${gap + 8}px` : "unset"}
        >
          <MotionFlex
            dragDirectionLock
            dragConstraints={node}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onClickCapture={onClickCapture}
            onTouchEnd={onTouchEnd}
            animate={controls}
            style={{ x }}
            drag="x"
            _active={{ cursor: "grabbing" }}
            minWidth="min-content"
            flexWrap="nowrap"
            cursor="grab"
            onDirectionLock={onDirectionDetermined}
          >
            {children}
          </MotionFlex>
        </VStack>
      )}
    </>
  );
};
