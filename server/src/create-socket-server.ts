import { Server, Socket } from "socket.io";
import * as http from "http";
import { validateTokenRequest } from "./middlewares/user-authorization-wrapper";
import {
  IncomingSocketEventPayload,
  Play,
  OutgoingSocketEvents,
  EmitPayload,
  GUEST_USER_ID,
  LocalCacheScoreboard,
  IncomingSocketEvents,
} from "./types";

const localTemplateCache: LocalCacheScoreboard[] = [];
const MAX_CACHE_SIZE = 100;
/**
 * Attach socket.io server to the express server to run on the same port.
 */
export const attachSocketToServer = ({
  server,
  path,
  gameControllers,
}: {
  server: http.Server;
  path: string;
  gameControllers: {
    playRegisterController: ({
      socketId,
      payload,
    }: {
      socketId: string;
      payload: IncomingSocketEventPayload;
    }) => Promise<Play>;
  };
}) => {
  let lastEvent:
    | { event: OutgoingSocketEvents; payload: EmitPayload }
    | undefined;

  const emitter = new Server(server, {
    cors: {
      origin: "*",
    },
    path,
  });

  emitter.use(async (socket: Socket, next) => {
    const { authorization, userId } = socket.handshake.auth;
    if (!authorization) {
      next(new Error(`Authorization header must be provided`));
    }

    if (!userId) {
      next(new Error(`User id must be provided`));
    }

    if (userId === GUEST_USER_ID) {
      console.log("Guest user connected, no access token validation required");
      await next();
      return;
    }

    try {
      await validateTokenRequest({ userId, authorization, next });
    } catch (e) {
      next(new Error("Invalid bearer token"));
    }
  });

  emitter.on("connection", (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on(
      IncomingSocketEvents.BET_LIST,
      async (payload: IncomingSocketEventPayload) => {
        try {
          socket.broadcast.emit(
            OutgoingSocketEvents.USER_BET_LIST_SUCCEEDED,
            localTemplateCache
          );
          socket.emit(
            OutgoingSocketEvents.USER_BET_LIST_SUCCEEDED,
            localTemplateCache
          );
        } catch (error) {
          console.warn({
            message: "Failed to emit bet list",
            socketId: socket.id,
            payload,
            error,
          });

          socket.emit(OutgoingSocketEvents.USER_BET_LIST_FAILED);
        }
      }
    );

    socket.on(
      IncomingSocketEvents.BET_REGISTER,
      async (payload: IncomingSocketEventPayload) => {
        if (payload.userId === GUEST_USER_ID) {
          console.warn({
            message: "Guest users cannot register a bet",
            socketId: socket.id,
            payload,
          });
          socket.emit(OutgoingSocketEvents.BET_REGISTER_FAILED, {
            reason: "You must be logged in to play",
          });
          return;
        }

        try {
          const response = await gameControllers.playRegisterController({
            socketId: socket.id,
            payload,
          });

          const cachedResponse = {
            ...response,
          };
          cachedResponse.playPayload = undefined;

          localTemplateCache.unshift({
            ...cachedResponse,
            pictureUrl: payload.pictureUrl,
          });

          if (localTemplateCache.length > MAX_CACHE_SIZE) {
            localTemplateCache.pop();
          }

          socket.broadcast.emit(
            OutgoingSocketEvents.USER_BET_LIST_SUCCEEDED,
            localTemplateCache
          );

          socket.emit(
            OutgoingSocketEvents.USER_BET_LIST_SUCCEEDED,
            localTemplateCache
          );

          socket.emit(OutgoingSocketEvents.BET_REGISTER_SUCCEEDED, {
            ...response,
            pictureUrl: payload.pictureUrl,
          });
        } catch (error) {
          console.warn({
            message: "Failed to register bet",
            socketId: socket.id,
            payload,
            error,
          });
          socket.emit(
            OutgoingSocketEvents.BET_REGISTER_FAILED,
            localTemplateCache
          );
        }
      }
    );

    setTimeout(() => {
      if (!lastEvent) {
        return;
      }

      const { event, payload } = lastEvent;
      socket.emit(event, payload);

      console.log(
        `Welcome emitted: ${event} #${payload.gameRoundUuid} t${payload.timestamp} on ${socket.id}`
      );
    }, 100);

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

  return {
    listener: ({
      event,
      callback,
    }: {
      event: IncomingSocketEvents;
      callback: ({
        socketId,
        payload,
      }: {
        socketId: string;
        payload: IncomingSocketEventPayload;
      }) => Promise<void>;
    }) => {
      console.log(`Registered listener on ${event}`);
      emitter.on(
        event,
        async (socket: Socket, payload: IncomingSocketEventPayload) =>
          await callback({ socketId: socket.id, payload })
      );
    },
    emitter: ({
      event,
      payload,
    }: {
      event: OutgoingSocketEvents;
      payload: EmitPayload;
    }) => {
      if (!emitter) {
        console.error({
          message: "Cannot emit, socket server is not live.",
          event,
          payload,
        });
        return;
      }

      emitter.emit(event, payload);
      lastEvent = { event, payload };

      console.log(
        `Emitted: ${event} #${payload.gameRoundUuid} t${payload.timestamp}`
      );
    },
  };
};
