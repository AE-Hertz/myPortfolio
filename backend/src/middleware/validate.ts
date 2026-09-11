import type { RequestHandler } from "express";
import { z } from "zod";

export const validateBody = (schema: z.ZodType): RequestHandler => (req, _res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    next(new Error(result.error.issues.map((issue) => issue.message).join(", ")));
    return;
  }
  req.body = result.data;
  next();
};

export const validateId: RequestHandler = (req, _res, next) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    next(new Error("id must be a positive integer"));
    return;
  }
  req.params.id = String(id);
  next();
};
