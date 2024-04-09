import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "./socket";
<<<<<<< Updated upstream
=======
import { UserInformation } from "@enigma-lake/zoot-game-integration-sdk";
import { CoinType } from "../utils/types";
>>>>>>> Stashed changes

export interface GameGridProps {
  socket: Socket<ServerToClientEvents & ClientToServerEvents>;
}
<<<<<<< Updated upstream
=======

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
  userInformation: UserInformation;
}
>>>>>>> Stashed changes
