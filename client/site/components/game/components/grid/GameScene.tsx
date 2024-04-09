import { Flex } from "@chakra-ui/react";
import { Text } from "../../../../design-system";
<<<<<<< Updated upstream

import { GameControlsContainer } from "../gameControls/GameControlsContainer";
=======
import { useDebouncedCallback } from "use-debounce";

import { GameControlsContainer } from "../gameControls/GameControlsContainer";
import {
  ToastType,
  useEnigmaLakeToastPreset,
} from "../../../../hooks/useEnigmaLakeToast";
import {
  purchaseCoinsEvent,
  loginUserEvent,
} from "@enigma-lake/zoot-game-integration-sdk";
import { useRecoilState, useRecoilValue } from "recoil";
import { identity } from "../../../../recoil/state/identity";
import {
  GUEST_USER_ID,
  GUEST_NICKNAME,
  GUEST_AVATAR,
  GUEST_ACCESS_TOKEN,
} from "../../utils/guestUserData";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { useBalanceAtom } from "../../../../recoil/state/balance";
import { useState } from "react";
import { ERRORS } from "../../utils/errors";
import { Socket } from "socket.io-client";
import { useGameSocket } from "../../websocket/useGameSocket";
>>>>>>> Stashed changes

export const GameScene = ({ socket }: { socket: Socket }) => {
  const loginInfo = useRecoilValue(identity);
  const [_balance] = useRecoilState(useBalanceAtom);
  const [_currency, _setCurrency] = useRecoilState(useCurrencyAtom);
  const [disableController, setDisableController] = useState(false);

  const _userInformation = {
    userId: loginInfo?.id ?? GUEST_USER_ID,
    userNickname: loginInfo?.nickname ?? GUEST_NICKNAME,
    userAvatar: loginInfo?.avatar ?? GUEST_AVATAR,
    accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
  };

  const { registerPlay } = useGameSocket({ socket });

<<<<<<< Updated upstream
export const GameScene = () => {
  const onPlayClick = () => {
    null;
  };

=======
  const toast = useEnigmaLakeToastPreset();

  const onPlay = useDebouncedCallback(
    () => {
      try {
        setDisableController(true);
        registerPlay({
          playDetails: {
            playAmountInCents: 500,
            coinType: 1,
          },
          userInformation: {
            nickname: loginInfo?.nickname ?? GUEST_NICKNAME,
            id: loginInfo?.id ?? GUEST_USER_ID,
            avatar: loginInfo?.avatar ?? GUEST_AVATAR,
            accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
          },
        });
        setDisableController(false);
      } catch (e) {
        console.error(e);
        let reason = "General error";
        let toastType: ToastType = "error";

        if (e.response.data.message) {
          reason = e.response.data.message;
        }

        if (reason === ERRORS.INSUFFICIENT_FUNDS) {
          purchaseCoinsEvent();
          reason = "Failed to play - insufficient coins";
        }

        if (reason === ERRORS.NEEDS_TO_LOGIN) {
          loginUserEvent();
          reason = "Register & receive free bonus coins to play Crash Game!";
          toastType = "info";
        }
        toast(reason, toastType);
        setDisableController(false);
      }
    },
    1,
    {
      leading: true,
      trailing: false,
    }
  );
>>>>>>> Stashed changes
  return (
    <Flex direction="column" w="full">
      <Flex
        w="full"
        h="40vh"
        bg="black850"
        px={10}
        alignItems="center"
        justifyItems="center"
      >
        <Text align="center" width="full">
          Here comes the game!
        </Text>
      </Flex>
<<<<<<< Updated upstream
      <GameControlsContainer onClick={onPlayClick} />
=======
      <GameControlsContainer
        onClick={onPlay}
        disableControllers={disableController}
      />
>>>>>>> Stashed changes
    </Flex>
  );
};
