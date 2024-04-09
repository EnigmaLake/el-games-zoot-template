import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "./socket";
import { CoinType } from "../utils/types";

export interface GameGridProps {
  socket: Socket<ServerToClientEvents & ClientToServerEvents>;
}

export enum SOCKET_EVENT {
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  CONNECT_ERROR = "connect_error",
}

export interface RegisterUserPlay {
  playDetails: {
    playAmountInCents: number;
    coinType: CoinType;
  };
  userInformation: {
    pictureUrl: string;
    accessToken: string;
    userId: number;
    userNickname: string;
  };
}
