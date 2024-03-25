import { FC, PropsWithChildren, useMemo, useState } from "react";

import { Flex } from "@chakra-ui/react";

interface ItemProps {
  setTrackIsActive: (value: boolean) => void;
  setActiveItem: (value: number) => void;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[] | null | undefined;
  index: number;
  gap: number;
}

export const Item: FC<PropsWithChildren<ItemProps>> = ({
  setTrackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  children,
  index,
  gap,
  ...rest
}) => {
  const positions = useMemo(() => rest.positions ?? [], [rest.positions]);
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => setTrackIsActive(true);

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: { key: string }) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index);

  const handleKeyDown = (event: { key: string }) =>
    event.key === "Tab" && setUserDidTab(true);

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
    >
      {children}
    </Flex>
  );
};
