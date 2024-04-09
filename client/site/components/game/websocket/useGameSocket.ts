import { Socket } from "socket.io-client";
import { useCallback, useEffect } from "react";
import {
  loginUserEvent,
  purchaseCoinsEvent,
  UserInformation,
} from "@enigma-lake/zoot-game-integration-sdk";

import {
  CLIENT_TO_SERVER_EVENTS,
  ClientToServerEvents,
  SERVER_TO_CLIENT_EVENTS,
  ServerToClientEvents,
  ServerToClientEventsList,
  ServerToClientSocketEventPayload,
} from "../websocket/socket";

import {
  ToastType,
  useEnigmaLakeToastPreset,
} from "../../../hooks/useEnigmaLakeToast";
import { ERRORS } from "../utils/errors";
import { RegisterUserPlay, SOCKET_EVENT } from "./types";

export const useGameSocket = ({
  socket,
}: {
  socket: Socket<ServerToClientEvents & ClientToServerEvents>;
}): {
  registerPlay: (_registerPlay: RegisterUserPlay) => void;
  getPlayRoundsHistory: (_userInformation: UserInformation) => void;
} => {
  const toast = useEnigmaLakeToastPreset();

  const logSocketEvent = (
    eventType: SERVER_TO_CLIENT_EVENTS,
    payload:
      | ServerToClientSocketEventPayload[]
      | ServerToClientSocketEventPayload,
    sockedId?: string
  ) => {
    console.log({
      event: SERVER_TO_CLIENT_EVENTS[eventType],
      payload,
      sockedId,
    });
  };

  const registerPlay = useCallback(
    ({ playDetails, userInformation }: RegisterUserPlay) => {
      socket?.emit(CLIENT_TO_SERVER_EVENTS.BET_REGISTER, {
        userId: userInformation.id,
        userNickname: userInformation.nickname,
        pictureUrl: userInformation.avatar,
        accessToken: userInformation.accessToken,
        ...playDetails,
      });
    },
    [socket]
  );

  const getPlayRoundsHistory = useCallback(
    (userInformation: UserInformation) => {
      socket?.emit(CLIENT_TO_SERVER_EVENTS.BET_LIST, {
        userId: userInformation.id,
        userNickname: userInformation.nickname,
      });
    },
    [socket]
  );

  const disconnectAllEvents = useCallback(() => {
    for (const event of ServerToClientEventsList) {
      socket?.off(event);
    }
  }, [socket]);

  useEffect(() => {
    socket?.on(SOCKET_EVENT.CONNECT, () => {
      console.log(`User connected to websocket ${socket.id}`);
    });

    socket?.on(SOCKET_EVENT.DISCONNECT, () => {
      console.log(`Disconnected from websocket ${socket.id}`);
    });

    socket?.on(SOCKET_EVENT.CONNECT_ERROR, (payload) => {
      console.log(`Failed to connect to websocket ${socket.id}`, payload);
    });

    socket?.on(SERVER_TO_CLIENT_EVENTS.BET_REGISTER_SUCCEEDED, (payload) => {
      logSocketEvent(
        SERVER_TO_CLIENT_EVENTS.BET_REGISTER_SUCCEEDED,
        payload,
        socket?.id
      );

      // TODO handle bet register success event
    });

    socket?.on(SERVER_TO_CLIENT_EVENTS.BET_REGISTER_FAILED, (payload) => {
      // TODO handle bet register failed event

      logSocketEvent(
        SERVER_TO_CLIENT_EVENTS.BET_REGISTER_FAILED,
        payload,
        socket?.id
      );

      let reason = "General error";
      let toastType: ToastType = "error";

      if (payload?.reason === ERRORS.INSUFFICIENT_FUNDS) {
        purchaseCoinsEvent();
        reason = "Failed to play - insufficient coins";
      }

      if (payload?.reason === ERRORS.NEEDS_TO_LOGIN) {
        loginUserEvent();
        reason = "Register & receive free bonus coins to play Crash Game!";
        toastType = "info";
      }
      toast(reason, toastType);

      toast(reason, toastType);
    });
  }, [socket, socket.id, toast]);

  useEffect(() => {
    return () => disconnectAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    registerPlay,
    getPlayRoundsHistory,
  };
};
