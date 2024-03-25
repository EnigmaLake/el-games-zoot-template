import { Flex } from "@chakra-ui/react";
import React, { FC, PropsWithChildren, RefObject } from "react";

interface BasicPageProps {
  innerRef?: RefObject<HTMLDivElement>;
  moveTop?: boolean;
}

export const BasicPage: FC<PropsWithChildren<BasicPageProps>> = ({
  children,
  innerRef,
  moveTop,
}) => {
  return (
    <>
      <Flex
        width="100%"
        height="100%"
        columnGap={6}
        flexDirection="column"
        px={0}
        ref={innerRef}
        id="page"
        overflow="auto"
        transform={moveTop ? "translateY(-5rem)" : "none"}
      >
        <Flex flex={1} flexDirection="column" height="auto">
          {children}
        </Flex>
      </Flex>
    </>
  );
};
