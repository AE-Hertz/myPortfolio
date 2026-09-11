import type { RequestHandler } from "express";
import { notFound } from "../errors/AppError.js";

export const notFoundHandler: RequestHandler = (_req, _res, next) => {
  next(notFound("Route"));
};
