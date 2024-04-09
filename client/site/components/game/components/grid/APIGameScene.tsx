import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  purchaseCoinsEvent,
  loginUserEvent,
} from "@enigma-lake/zoot-game-integration-sdk";
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
import { IN_CENTS } from "../../utils/formatting";
import { identity } from "../../../../recoil/state/identity";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { registerUserPlay } from "../../../../requests/register-user-play";
import { GameControlsContainer } from "../gameControls/GameControlsContainer";

export const APIGameScene = () => {
  const loginInfo = useRecoilValue(identity);
  const [currency] = useRecoilState(useCurrencyAtom);
  const [disableController, setDisableController] = useState(false);
  const { playAmount } = usePlayAmount();
  const toast = useEnigmaLakeToastPreset();

  const userInformation = {
    userId: loginInfo?.id ?? GUEST_USER_ID,
    userNickname: loginInfo?.nickname ?? GUEST_NICKNAME,
    pictureUrl: loginInfo?.avatar ?? GUEST_AVATAR,
    accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
  };

  const onPlayClick = async () => {
    try {
      setDisableController(true);
      await registerUserPlay({
        playAmountInCents: playAmount * IN_CENTS,
        userId: userInformation.userId,
        userNickname: userInformation.userNickname,
        userAccessToken: userInformation.accessToken,
        coinType: CoinType[currency],
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
  };

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
          Here comes the game connected with RGS API!
        </Text>
      </Flex>
      <GameControlsContainer
        onClick={onPlayClick}
        disableControllers={disableController}
      />
    </Flex>
  );
};
