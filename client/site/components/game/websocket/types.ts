import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "./socket";

export interface GameGridProps {
  socket: Socket<ServerToClientEvents & ClientToServerEvents>;
}
