import { Flex } from "@chakra-ui/react";
import { useDebouncedCallback } from "use-debounce";
import { Text } from "../../../../design-system";

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
import { IN_CENTS } from "../../utils/formatting";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";
import { CoinType } from "../../utils/types";

export const GameScene = ({ socket }: { socket: Socket }) => {
  const loginInfo = useRecoilValue(identity);
  const [_balance] = useRecoilState(useBalanceAtom);
  const [currency, _setCurrency] = useRecoilState(useCurrencyAtom);
  const [disableController, setDisableController] = useState(false);
  const { playAmount } = usePlayAmount();

  const userInformation = {
    userId: loginInfo?.id ?? GUEST_USER_ID,
    userNickname: loginInfo?.nickname ?? GUEST_NICKNAME,
    pictureUrl: loginInfo?.avatar ?? GUEST_AVATAR,
    accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
  };

  const { registerPlay } = useGameSocket({ socket });

  const toast = useEnigmaLakeToastPreset();

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
      <GameControlsContainer
        onClick={onPlay}
        disableControllers={disableController}
      />
    </Flex>
  );
};
