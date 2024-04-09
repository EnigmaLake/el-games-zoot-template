import { CoinType } from "../utils/types";

export interface ServerToClientEvents {
  WELCOME_FROM_SERVER: (payload: ServerToClientSocketEventPayload) => void;
  GAME_ROUND_PREPARED: (payload: ServerToClientSocketEventPayload) => void;
  GAME_ROUND_LIVE: (payload: ServerToClientSocketEventPayload) => void;
  GAME_ROUND_COMPLETED: (payload: ServerToClientSocketEventPayload) => void;
  GAME_ROUND_CANCELED: (payload: ServerToClientSocketEventPayload) => void;

  USER_BET_REGISTER: (payload: ServerToClientSocketEventPayload[]) => void;
  USER_BET_DEREGISTER: (payload: ServerToClientSocketEventPayload[]) => void;
  USER_BET_CASHOUT: (payload: ServerToClientSocketEventPayload[]) => void;

  BET_REGISTER_SUCCEEDED: (payload: ServerToClientSocketEventPayload) => void;
  BET_REGISTER_FAILED: (payload: ServerToClientSocketEventPayload) => void;
  BET_DEREGISTER_SUCCEEDED: (payload: ServerToClientSocketEventPayload) => void;
  BET_DEREGISTER_FAILED: (payload: ServerToClientSocketEventPayload) => void;
  BET_CASHOUT_SUCCEEDED: (payload: ServerToClientSocketEventPayload) => void;
  BET_CASHOUT_FAILED: (payload: ServerToClientSocketEventPayload) => void;

  USER_BET_LIST_SUCCEEDED: (
    payload: ServerToClientSocketEventPayload[]
  ) => void;
  USER_BET_LIST_FAILED: (payload: ServerToClientSocketEventPayload[]) => void;
}

export enum SERVER_TO_CLIENT_EVENTS {
  WELCOME_FROM_SERVER = "WELCOME_FROM_SERVER",

  // Game round status
  GAME_ROUND_PREPARED = "GAME_ROUND_PREPARED",
  GAME_ROUND_LIVE = "GAME_ROUND_LIVE",
  GAME_ROUND_COMPLETED = "GAME_ROUND_COMPLETED",
  GAME_ROUND_CANCELED = "GAME_ROUND_CANCELED",

  USER_BET_LIST_SUCCEEDED = "USER_BET_LIST_SUCCEEDED",
  USER_BET_LIST_FAILED = "USER_BET_LIST_FAILED",

  // Register events
  BET_REGISTER_SUCCEEDED = "BET_REGISTER_SUCCEEDED",
  BET_REGISTER_FAILED = "BET_REGISTER_FAILED",

  // Deregister events
  BET_DEREGISTER_SUCCEEDED = "BET_DEREGISTER_SUCCEEDED",
  BET_DEREGISTER_FAILED = "BET_DEREGISTER_FAILED",

  // Cashout events
  BET_CASHOUT_SUCCEEDED = "BET_CASHOUT_SUCCEEDED",
  BET_CASHOUT_FAILED = "BET_CASHOUT_FAILED",
}

export const ServerToClientEventsList = [
  SERVER_TO_CLIENT_EVENTS.WELCOME_FROM_SERVER,

  SERVER_TO_CLIENT_EVENTS.GAME_ROUND_PREPARED,
  SERVER_TO_CLIENT_EVENTS.GAME_ROUND_LIVE,
  SERVER_TO_CLIENT_EVENTS.GAME_ROUND_COMPLETED,
  SERVER_TO_CLIENT_EVENTS.GAME_ROUND_CANCELED,

  SERVER_TO_CLIENT_EVENTS.BET_REGISTER_SUCCEEDED,
  SERVER_TO_CLIENT_EVENTS.BET_REGISTER_FAILED,

  SERVER_TO_CLIENT_EVENTS.BET_DEREGISTER_SUCCEEDED,
  SERVER_TO_CLIENT_EVENTS.BET_DEREGISTER_FAILED,

  SERVER_TO_CLIENT_EVENTS.BET_CASHOUT_SUCCEEDED,
  SERVER_TO_CLIENT_EVENTS.BET_CASHOUT_FAILED,

  SERVER_TO_CLIENT_EVENTS.USER_BET_LIST_FAILED,
  SERVER_TO_CLIENT_EVENTS.USER_BET_LIST_SUCCEEDED,
];

export interface ClientToServerEvents {
  BET_REGISTER: (payload: ClientToServerSocketEventPayload) => void;
  BET_DEREGISTER: (payload: ClientToServerSocketEventPayload) => void;
  BET_CASHOUT: (payload: ClientToServerSocketEventPayload) => void;
  BET_LIST: (payload: ClientToServerSocketEventPayload) => void;
}

export enum CLIENT_TO_SERVER_EVENTS {
  BET_REGISTER = "BET_REGISTER",
  BET_DEREGISTER = "BET_DEREGISTER",
  BET_CASHOUT = "BET_CASHOUT",
  BET_LIST = "BET_LIST",
}

export interface ClientToServerSocketEventPayload
  extends Record<string, unknown> {
  gameRoundUuid?: string;
  userId: number;
  userNickname?: string;
}

export interface ServerToClientSocketEventPayload {
  gameRoundUuid: string;
  playId: string;
  userId: number;
  userNickname: string;
  playAmountInCents: number;
  winAmountInCents: number;
  winMultiplier: string;
  pictureUrl?: string;
  coinType: CoinType;
  timestamp: number;
  reason?: RgsErrors;
  playPayload?: Record<string, unknown>;
}
