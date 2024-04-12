import { useState } from "react";
import { Flex, ToastPosition } from "@chakra-ui/react";
import { Socket } from "socket.io-client";
import {
  purchaseCoinsEvent,
  loginUserEvent,
} from "@enigma-lake/zoot-platform-sdk";
import { useDebouncedCallback } from "use-debounce";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  GUEST_USER_ID,
  GUEST_NICKNAME,
  GUEST_AVATAR,
  GUEST_ACCESS_TOKEN,
} from "../../utils/guestUserData";
import { ERRORS } from "../../utils/errors";
import { CoinType } from "../../utils/types";
import {
  ToastType,
  useEnigmaLakeToastPreset,
} from "../../../../hooks/useEnigmaLakeToast";
import { Text } from "../../../../design-system";
import { getCurrencyText, IN_CENTS } from "../../utils/formatting";
import { identity } from "../../../../recoil/state/identity";
import { useGameSocket } from "../../websocket/useGameSocket";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { GameControlsContainer } from "../gameControls/GameControlsContainer";

export const SocketGameScene = ({ socket }: { socket: Socket }) => {
  const loginInfo = useRecoilValue(identity);
  const [currency] = useRecoilState(useCurrencyAtom);
  const [disableController, setDisableController] = useState(false);

  const { playAmount } = usePlayAmount();
  const { registerPlay } = useGameSocket({ socket });
  const toast = useEnigmaLakeToastPreset();

  const userInformation = {
    userId: loginInfo?.id ?? GUEST_USER_ID,
    userNickname: loginInfo?.nickname ?? GUEST_NICKNAME,
    pictureUrl: loginInfo?.avatar ?? GUEST_AVATAR,
    accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
  };

  const onPlay = useDebouncedCallback(
    () => {
      try {
        setDisableController(true);

        registerPlay({
          playDetails: {
            playAmountInCents: playAmount * IN_CENTS,
            coinType: CoinType[currency],
          },
          userInformation,
        });

        const toastType: ToastType = "success";
        const toastPosition: ToastPosition = "top";
        const toastMessage: string = `Play registered: ${playAmount} ${getCurrencyText(
          currency
        )}`;
        toast(toastMessage, toastType, toastPosition);

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

  return (
    <Flex direction="column" w="full">
      <Flex
        className="game-container"
        px={10}
        alignItems="center"
        justifyItems="center"
      >
        <Text align="center" width="full">
          Here comes the game connected with RGS socket!
        </Text>
      </Flex>
      <GameControlsContainer
        onClick={onPlay}
        disableControllers={disableController}
      />
    </Flex>
  );
};
