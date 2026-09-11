import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const [profile, bio, projects, skills, experiences, education, socialLinks] = await Promise.all([
      prisma.profile.findUnique({ where: { id: "default" } }),
      prisma.bio.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.project.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.skill.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.experience.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.education.findMany({ orderBy: { sortOrder: "asc" } }),
      prisma.socialLink.findMany({ orderBy: { sortOrder: "asc" } }),
    ]);
    res.json({ success: true, data: { profile, bio, projects, skills, experiences, education, socialLinks } });
  } catch (error) {
    next(error);
  }
});

export default router;
