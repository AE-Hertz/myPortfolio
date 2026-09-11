import { Router } from "express";
import { AppError, notFound } from "../errors/AppError.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { prisma } from "../lib/prisma.js";
import { profileSchema } from "../schemas/portfolio.js";

const router = Router();

router.get("/", asyncHandler(async (_req, res) => {
  const profile = await prisma.profile.findUnique({ where: { id: "default" } });
  if (!profile) throw notFound("Profile");
  res.json({ success: true, data: profile });
}));

router.put("/", asyncHandler(async (req, res) => {
  const result = profileSchema.safeParse(req.body);
  if (!result.success) {
    throw new AppError(422, result.error.issues.map((issue) => issue.message).join(", "), "VALIDATION_ERROR");
  }
  const profile = await prisma.profile.upsert({
    where: { id: "default" },
    create: { id: "default", ...result.data },
    update: result.data,
  });
  res.json({ success: true, data: profile });
}));

export default router;
