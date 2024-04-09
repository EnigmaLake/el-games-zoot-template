import { useRecoilValue } from "recoil";
import { Flex } from "@chakra-ui/react";

import { CoinType } from "../../utils/types";
import { Text } from "../../../../design-system";
import { identity } from "../../../../recoil/state/identity";
import { usePlayAmount } from "../../../../hooks/usePlayAmount";
import { useCurrencyAtom } from "../../../../recoil/state/walletCurrency";
import { registerUserPlay } from "../../../../requests/register-user-play";
import { GameControlsContainer } from "../gameControls/GameControlsContainer";

const GAME_SCENE_HEIGHT = "32rem";

export const GameScene = () => {
  const { playAmount } = usePlayAmount();
  const loginInfo = useRecoilValue(identity);
  const currency = useRecoilValue(useCurrencyAtom);

  const onPlayClick = async () => {
    try {
      await registerUserPlay({
        playAmountInCents: playAmount,
        userId: loginInfo?.id,
        userNickname: loginInfo?.nickname,
        userAccessToken: loginInfo?.accessToken,
        coinType: CoinType[currency],
      });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <Flex direction="column" w="full">
      <Flex
        w="full"
        h={{
          xxs: "25rem",
          md: GAME_SCENE_HEIGHT,
          base: GAME_SCENE_HEIGHT,
          lg: GAME_SCENE_HEIGHT,
        }}
        bg="black850"
        px={{ lg: 10, sm: 0, xs: 0 }}
        alignItems="center"
        justifyItems="center"
      >
        <Text align="center" width="full">
          Here comes the game!
        </Text>
      </Flex>
      <GameControlsContainer onClick={onPlayClick} />
    </Flex>
  );
};
