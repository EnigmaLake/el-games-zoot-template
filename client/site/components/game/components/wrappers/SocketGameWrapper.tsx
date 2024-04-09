import { useState, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Socket, io } from "socket.io-client";
import { identity } from "../../../../recoil/state/identity";
import { GUEST_ACCESS_TOKEN, GUEST_USER_ID } from "../../utils/guestUserData";
import {
  ServerToClientEvents,
  ClientToServerEvents,
  ServerToClientEventsList,
} from "../../websocket/socket";
import { SocketGameScene } from "../grid/SocketGameScene";

const SocketGameWrapper = () => {
  if (!process.env.NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL) {
    throw new Error("Env variable NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL missing");
  }

  if (!process.env.NEXT_PUBLIC_SOCKET_PATH) {
    throw new Error("Env variable NEXT_PUBLIC_SOCKET_PATH missing");
  }
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents & ClientToServerEvents>>();

  const [loginInfo] = useRecoilState(identity);

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
        path: `/${process.env.NEXT_PUBLIC_SOCKET_PATH}`,
      })
    );
  };

  const disconnectSocketsEvents = useCallback(() => {
    for (const event of ServerToClientEventsList) {
      socket?.off(event);
    }
  }, [socket]);

  useEffect(() => {
    return () => {
      disconnectSocketsEvents();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    disconnectSocketsEvents();
    connectToSocket({
      accessToken: loginInfo?.accessToken ?? GUEST_ACCESS_TOKEN,
      userId: loginInfo?.id ?? GUEST_USER_ID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo?.accessToken, loginInfo?.id]);

  if (!socket) {
    return null;
  }
  return <SocketGameScene socket={socket} />;
};

export default SocketGameWrapper;
