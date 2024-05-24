import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";
import { EVENTS, requestInitData } from "@enigma-lake/zoot-platform-sdk";

import { identity } from "../../recoil/state/identity";
import { useBalanceAtom } from "../../recoil/state/balance";
import { useCurrencyAtom } from "../../recoil/state/walletCurrency";
import { gameExpendedAtom } from "../../recoil/state/gameExpended";
import { Box, Flex } from "@chakra-ui/react";
import { ExpandButton } from "./components/grid/ExpandButton";
import { APIGameScene } from "./components/grid/APIGameScene";
import SocketGameWrapper from "./components/wrappers/SocketGameWrapper";
import { useSetPlayLimitsState } from "../../recoil/state/playLimits";

const BasicGamePage = () => {
  const [, setIsGameExpanded] = useRecoilState(gameExpendedAtom);
  const [, setBalance] = useRecoilState(useBalanceAtom);
  const [, setCurrency] = useRecoilState(useCurrencyAtom);
  const [, setLoginInfo] = useRecoilState(identity);
  const [, setPlayLimits] = useSetPlayLimitsState();

  const withSocket =
    process.env.NEXT_PUBLIC_USE_SOCKET &&
    process.env.NEXT_PUBLIC_USE_SOCKET === "true";

  const handleWindowMessage = useCallback((event) => {
    if (!event.data.data) {
      return;
    }
    if (event.data.event_id === EVENTS.EL_GET_USER_CURRENCY) {
      setCurrency(event.data.data?.currency);
    }
    if (event.data.event_id === EVENTS.EL_USER_BALANCE) {
      setBalance({
        sweepsBalance: event.data.data?.sweepsBalance ?? 0,
        goldBalance: event.data.data?.goldBalance ?? 0,
      });
    }
    if (event.data.event_id === EVENTS.EL_GET_EXPANDED_GAME_VIEW) {
      setIsGameExpanded(event.data.data);
    }
    if (event.data.event_id === EVENTS.EL_USER_INFORMATION) {
      setLoginInfo({
        ...event.data.data,
      });
    }
    if (event.data.event_id === EVENTS.EL_SET_PLAY_LIMITS) {
      setPlayLimits({
        ...event.data.data,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    requestInitData();

    window.addEventListener("message", handleWindowMessage);

    return () => {
      window.removeEventListener("message", handleWindowMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      bg="background-level-2"
      borderRadius="lg"
      flexDir="column"
      w="full"
      h="full"
      pos="relative"
    >
      <Box pos="absolute" top={4} right={4}>
        <ExpandButton />
      </Box>
      {withSocket ? <SocketGameWrapper /> : <APIGameScene />}
    </Flex>
  );
};

export default BasicGamePage;
