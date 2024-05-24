import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { GameControlsMobile } from "./GameControlsMobile";
import { GameControlsDesktop } from "./GameControlsDesktop";
import { useSetPlayLimitsState } from "../../../../recoil/state/playLimits";

interface GameControlsProps {
  onClick: () => void;
  disableControllers: boolean;
}

const PLAY_CONTROLLER_HEIGHT = 155;

export const GameControlsContainer = ({
  onClick,
  disableControllers,
}: GameControlsProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [playLimits] = useSetPlayLimitsState();

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
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
      {playLimits && (
        <>
          {screenWidth > 700 ? (
            <GameControlsDesktop
              onClick={onClick}
              disableControllers={disableControllers}
              playLimits={playLimits}
            />
          ) : (
            <GameControlsMobile
              onClick={onClick}
              disableControllers={disableControllers}
              playLimits={playLimits}
            />
          )}
        </>
      )}
    </Flex>
  );
};
