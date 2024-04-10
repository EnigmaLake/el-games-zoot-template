import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { GameControlsMobile } from "./GameControlsMobile";
import { GameControlsDesktop } from "./GameControlsDesktop";

interface GameControlsProps {
  onClick: () => void;
  disableControllers: boolean;
}

const PLAY_CONTROLLER_HEIGHT = 225;

export const GameControlsContainer = ({
  onClick,
  disableControllers,
}: GameControlsProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      h={PLAY_CONTROLLER_HEIGHT}
      w="full"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {screenWidth > 900 ? (
        <GameControlsDesktop
          onClick={onClick}
          disableControllers={disableControllers}
        />
      ) : (
        <GameControlsMobile
          onClick={onClick}
          disableControllers={disableControllers}
        />
      )}
    </Flex>
  );
};
