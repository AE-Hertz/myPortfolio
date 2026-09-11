import { Router } from "express";
import { z } from "zod";
import { AppError, notFound } from "../errors/AppError.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { validateId } from "../middleware/validate.js";

type CrudOperations<TEntity, TCreate, TUpdate> = {
  list: () => Promise<TEntity[]>;
  get: (id: number) => Promise<TEntity | null>;
  create: (data: TCreate) => Promise<TEntity>;
  update: (id: number, data: TUpdate) => Promise<TEntity>;
  remove: (id: number) => Promise<TEntity>;
};

export const createCrudRouter = <TEntity, TCreate, TUpdate>(
  resourceName: string,
  createSchema: z.ZodType<TCreate>,
  updateSchema: z.ZodType<TUpdate>,
  operations: CrudOperations<TEntity, TCreate, TUpdate>,
) => {
  const router = Router();
  const send = (res: Parameters<NonNullable<Parameters<typeof asyncHandler>[0]>>[1], data: unknown, status = 200) =>
    res.status(status).json({ success: true, data });

  router.get("/", asyncHandler(async (_req, res) => send(res, await operations.list())));

  router.get("/:id", validateId, asyncHandler(async (req, res) => {
    const entity = await operations.get(Number(req.params.id));
    if (!entity) throw notFound(resourceName);
    send(res, entity);
  }));

  router.post("/", asyncHandler(async (req, res) => {
    const result = createSchema.safeParse(req.body);
    if (!result.success) {
      throw new AppError(422, result.error.issues.map((issue) => issue.message).join(", "), "VALIDATION_ERROR");
    }
    send(res, await operations.create(result.data), 201);
  }));

  router.patch("/:id", validateId, asyncHandler(async (req, res) => {
    const result = updateSchema.safeParse(req.body);
    if (!result.success) {
      throw new AppError(422, result.error.issues.map((issue) => issue.message).join(", "), "VALIDATION_ERROR");
    }
    const existing = await operations.get(Number(req.params.id));
    if (!existing) throw notFound(resourceName);
    send(res, await operations.update(Number(req.params.id), result.data));
  }));

  router.delete("/:id", validateId, asyncHandler(async (req, res) => {
    const existing = await operations.get(Number(req.params.id));
    if (!existing) throw notFound(resourceName);
    await operations.remove(Number(req.params.id));
    res.status(204).send();
  }));

  return router;
};
