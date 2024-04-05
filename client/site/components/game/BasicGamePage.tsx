import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import {
  ClientToServerEvents,
  ServerToClientEvents,
  ServerToClientEventsList,
} from "./websocket/socket";

import {
  EVENTS,
  requestInitData,
} from "@enigma-lake/zoot-game-integration-sdk";
import { GameGrid } from "./components/grid/GameGrid";
import { identity } from "../../recoil/state/identity";
import { GUEST_ACCESS_TOKEN, GUEST_USER_ID } from "./utils/guestUserData";
import { useBalanceAtom } from "../../recoil/state/balance";
import { useCurrencyAtom } from "../../recoil/state/walletCurrency";

const BasicGamePage = () => {
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents & ClientToServerEvents>>();

  const [, setBalance] = useRecoilState(useBalanceAtom);
  const [, setCurrency] = useRecoilState(useCurrencyAtom);
  const [loginInfo, setLoginInfo] = useRecoilState(identity);

  const connectToSocket = useCallback(
    ({ accessToken, userId }: { accessToken: string; userId: number }) => {
      return setSocket(
        io(process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL ?? "non-empty", {
          auth: {
            authorization: `Bearer ${accessToken}`,
            userId,
          },
          path: `/${process.env.NEXT_PUBLIC_GAME_NAME}`,
        })
      );
    },
    []
  );

  const disconnectAllEvents = useCallback(() => {
    for (const event of ServerToClientEventsList) {
      socket?.off(event);
    }
  }, [socket]);

  useEffect(() => {
    requestInitData();
    window.addEventListener("message", async (event) => {
      if (event.data.event_id === EVENTS.EL_GET_USER_CURRENCY) {
        if (!event.data.data) {
          return;
        }
        setCurrency(event.data.data?.currency);
      }
      if (event.data.event_id === EVENTS.EL_USER_BALANCE) {
        if (!event.data.data) {
          return;
        }
        setBalance({
          sweepsBalance: event.data.data?.sweepsBalance ?? 0,
          goldBalance: event.data.data?.goldBalance ?? 0,
        });
      }
      if (event.data.event_id === EVENTS.EL_USER_INFORMATION) {
        if (!event.data.data) {
          return;
        }
        setLoginInfo({
          ...event.data.data,
        });

        if (
          socket &&
          (event.data.data.accessToken !== loginInfo?.accessToken ||
            event.data.data.userId !== loginInfo?.id)
        ) {
          disconnectAllEvents();
        } else {
          connectToSocket({
            accessToken: event.data.data?.accessToken ?? GUEST_ACCESS_TOKEN,
            userId: event.data.data?.id ?? GUEST_USER_ID,
          });
        }
      }
    });
    return () => disconnectAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <GameGrid socket={socket} />;
};

export default BasicGamePage;
