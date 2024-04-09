import { Flex } from "@chakra-ui/react";

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
  return (
    <Flex h={PLAY_CONTROLLER_HEIGHT}>
      <Flex
        display={{
          lg: "none",
          xl: "none",
          xs: "flex",
          sm: "flex",
          base: "flex",
          "2sm": "flex",
        }}
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <GameControlsMobile
          onClick={onClick}
          disableControllers={disableControllers}
        />
      </Flex>
      <Flex
        display={{
          lg: "flex",
          xl: "flex",
          xs: "none",
          sm: "none",
          base: "none",
          "2sm": "none",
        }}
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <GameControlsDesktop
          onClick={onClick}
          disableControllers={disableControllers}
        />
      </Flex>
    </Flex>
  );
};
