import axios, { AxiosRequestConfig } from "axios";
import { Request, Response, NextFunction } from "express";
import { config } from "../config";
import { ExtendedError } from "socket.io/dist/namespace";

/**
 * Used on routes that require a valid user bearer token.
 * @param req
 * @param res
 * @param next
 */
export const userAuthorizationWrapper = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body as {
    userId?: number;
  };

  try {
    if (!req.headers["authorization"]) {
      throw new Error(`Authorization header must be provided`);
    }

    if (!userId) {
      throw new Error(`User id must be provided`);
    }

    await validateTokenRequest({
      userId,
      authorization: req.headers["authorization"],
      next,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(403);
  }
};

export const validateTokenRequest = async ({
  userId,
  authorization,
  next,
}: {
  userId: number;
  authorization: string;
  next: NextFunction | ((err?: ExtendedError | undefined) => void);
}) => {
  const requestConfig: AxiosRequestConfig = {
    url: `${config.authAPIHost}/users/verify-token/${userId}`,
    method: "GET",
    headers: {
      authorization,
    },
  };

  const response: { data: { isValid: boolean } } = await axios.request(
    requestConfig
  );

  if (response.data.isValid) {
    await next();
  } else {
    throw new Error("Invalid bearer token");
  }
};
