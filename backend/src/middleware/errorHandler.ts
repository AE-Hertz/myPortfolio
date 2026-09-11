import type { ErrorRequestHandler } from "express";
import { Prisma } from "@prisma/client";
import { AppError } from "../errors/AppError.js";

export const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  req.log.error({ err: error }, "Request failed");

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(409).json({
      success: false,
      error: { code: "DATABASE_ERROR", message: "The request conflicts with existing data" },
    });
    return;
  }

  const appError = error instanceof AppError
    ? error
    : new AppError(400, error instanceof Error ? error.message : "Request failed", "BAD_REQUEST");

  res.status(appError.statusCode).json({
    success: false,
    error: { code: appError.code, message: appError.message },
  });
};
