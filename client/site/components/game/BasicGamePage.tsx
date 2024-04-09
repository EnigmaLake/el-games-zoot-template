import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import {
  EVENTS,
  requestInitData,
} from "@enigma-lake/zoot-game-integration-sdk";

import {
  ClientToServerEvents,
  ServerToClientEvents,
  ServerToClientEventsList,
} from "./websocket/socket";

import { identity } from "../../recoil/state/identity";
import { GUEST_ACCESS_TOKEN, GUEST_USER_ID } from "./utils/guestUserData";
import { useBalanceAtom } from "../../recoil/state/balance";
import { useCurrencyAtom } from "../../recoil/state/walletCurrency";
import { gameExpendedAtom } from "../../recoil/state/gameExpended";
import { Flex } from "@chakra-ui/react";
import { GameScene } from "./components/grid/GameScene";
import { GameHeader } from "./components/grid/GameHeader";

const BasicGamePage = () => {
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents & ClientToServerEvents>>();

  const [, setIsGameExpanded] = useRecoilState(gameExpendedAtom);
  const [, setBalance] = useRecoilState(useBalanceAtom);
  const [, setCurrency] = useRecoilState(useCurrencyAtom);
  const [loginInfo, setLoginInfo] = useRecoilState(identity);

  const connectToSocket = ({
    accessToken,
    userId,
  }: {
    accessToken: string;
    userId: number;
  }) => {
    return setSocket(
      io(process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL ?? "non-empty", {
        auth: {
          authorization: `Bearer ${accessToken}`,
          userId,
        },
        path: `/${process.env.NEXT_PUBLIC_GAME_NAME}`,
      })
    );
  };

  const disconnectAllEvents = useCallback(() => {
    for (const event of ServerToClientEventsList) {
      socket?.off(event);
    }
  }, [socket]);

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
      disconnectAllEvents();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    disconnectAllEvents();
    connectToSocket({
      accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
      userId: loginInfo?.id ?? GUEST_USER_ID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo?.accessToken, loginInfo?.id]);

  if (!socket) {
    return null;
  }

  return (
    <Flex
      bg="background-level-2"
      borderRadius="lg"
      flexDir="column"
      w="full"
      h="full"
    >
      <GameHeader />
      <GameScene socket={socket} />
    </Flex>
  );
};

export default BasicGamePage;
