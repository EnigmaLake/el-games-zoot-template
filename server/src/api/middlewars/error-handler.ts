import { NextFunction, Request, Response } from "express";

/**
 * Error Middleware
 * @param err
 * @param _req
 * @param res
 * @param _next
 */
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("error", err);

  res.status(500).send({
    errorCode: 1,
    message: JSON.parse(err.message),
  });
};
