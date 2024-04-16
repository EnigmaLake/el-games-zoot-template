import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Wraps the request handler in a try catch
 * Catches request handler errors and
 * forwards the error to the error handler middleware
 */
export const asyncWrapper = (requestHandler: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await requestHandler(req, res, next);
    } catch (e) {
      next(e);
    }
  };
};
