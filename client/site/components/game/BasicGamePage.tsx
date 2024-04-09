import { useRecoilState } from "recoil";
import { useCallback, useEffect } from "react";
import {
  EVENTS,
  requestInitData,
} from "@enigma-lake/zoot-game-integration-sdk";

import { identity } from "../../recoil/state/identity";
import { useBalanceAtom } from "../../recoil/state/balance";
import { useCurrencyAtom } from "../../recoil/state/walletCurrency";
import { gameExpendedAtom } from "../../recoil/state/gameExpended";
import { Flex } from "@chakra-ui/react";
import { GameHeader } from "./components/grid/GameHeader";
import { APIGameScene } from "./components/grid/APIGameScene";
import SocketGameWrapper from "./components/wrappers/SocketGameWrapper";

const BasicGamePage = () => {
  const [, setIsGameExpanded] = useRecoilState(gameExpendedAtom);
  const [, setBalance] = useRecoilState(useBalanceAtom);
  const [, setCurrency] = useRecoilState(useCurrencyAtom);
  const [, setLoginInfo] = useRecoilState(identity);
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
      setIsGameExpanded(event.data.data.expanded);
    }
    if (event.data.event_id === EVENTS.EL_USER_INFORMATION) {
      setLoginInfo({
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
    >
      <GameHeader />
      {withSocket ? <SocketGameWrapper /> : <APIGameScene />}
    </Flex>
  );
};

export default BasicGamePage;
