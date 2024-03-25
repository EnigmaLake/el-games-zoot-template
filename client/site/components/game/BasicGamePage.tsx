import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import {
  ClientToServerEvents,
  ServerToClientEvents,
  ServerToClientEventsList,
} from "./websocket/socket";
import {
  GUEST_ACCESS_TOKEN,
  GUEST_USER_ID,
} from "../../utility/guest-user-socket";
import { useBalance } from "./hooks/useBalance";
import {
  EVENTS,
  requestInitData,
} from "@enigma-lake/zoot-game-integration-sdk";
import { useCurrency } from "./hooks/useCurrency";
import { GameGrid } from "./components/grid/GameGrid";
import { identity } from "../../recoil/state/identity";

const BasicGamePage = () => {
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents & ClientToServerEvents>>();

  const { setBalance } = useBalance();
  const { setCurrency } = useCurrency();
  const [loginInfo, setLoginInfo] = useRecoilState(identity);

  const connectToSocket = ({ accessToken, userId }) => {
    return setSocket(
      io(process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL ?? "non-empty", {
        auth: {
          authorization: `Bearer ${accessToken}`,
          userId,
        },
        path: "/game",
      })
    );
  };

  useEffect(() => {
    if ((!loginInfo?.accessToken || !loginInfo?.id) && !socket) {
      connectToSocket({
        accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
        userId: loginInfo?.id ?? GUEST_USER_ID,
      });
    }

    requestInitData();

    window.addEventListener("message", async (event) => {
      if (event.data.event_id === EVENTS.EL_GET_USER_CURRENCY) {
        if (!event?.data?.data) {
          return;
        }

        setCurrency(event.data.data.currency);
      }
      if (event.data.event_id === EVENTS.EL_USER_BALANCE) {
        if (!event?.data?.data) {
          return;
        }

        setBalance({
          sweepsBalance: event.data.data.sweepsBalance,
          goldBalance: event.data.data.goldBalance,
        });
      }
      if (event.data.event_id === EVENTS.EL_USER_INFORMATION) {
        setLoginInfo({
          ...event.data.data,
        });

        if (socket) {
          disconnectAllEvents();
        }
        connectToSocket({
          accessToken: event.data.data?.accessToken ?? GUEST_ACCESS_TOKEN,
          userId: event.data.data?.id ?? GUEST_USER_ID,
        });
      }
    });
    return () => disconnectAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disconnectAllEvents = () => {
    for (const event of ServerToClientEventsList) {
      socket?.off(event);
    }
  };

  if (!socket) {
    return <></>;
  }

  return <GameGrid socket={socket} />;
};

export default BasicGamePage;
