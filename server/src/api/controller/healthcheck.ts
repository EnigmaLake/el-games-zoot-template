import { RequestHandler } from "express";

export const createHealthcheckRequestHandler = (): RequestHandler => {
  return async (_req, res) => {
    res.send({
      message: "El Games Zoot Template Game Server is healthy and sound",
    });
  };
};
