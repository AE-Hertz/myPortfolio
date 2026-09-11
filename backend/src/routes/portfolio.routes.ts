import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { createCrudRouter } from "./crudRouter.js";
import {
  bioSchema, educationSchema, experienceSchema, projectSchema, skillSchema, socialLinkSchema,
} from "../schemas/portfolio.js";

const router = Router();
const ordered = { orderBy: { sortOrder: "asc" as const } };

router.use("/bio", createCrudRouter(
  "Bio item", bioSchema, bioSchema.partial(),
  {
    list: () => prisma.bio.findMany(ordered),
    get: (id) => prisma.bio.findUnique({ where: { id } }),
    create: (data) => prisma.bio.create({ data }),
    update: (id, data) => prisma.bio.update({ where: { id }, data }),
    remove: (id) => prisma.bio.delete({ where: { id } }),
  },
));

router.use("/projects", createCrudRouter(
  "Project", projectSchema, projectSchema.partial(),
  {
    list: () => prisma.project.findMany(ordered),
    get: (id) => prisma.project.findUnique({ where: { id } }),
    create: (data) => prisma.project.create({ data }),
    update: (id, data) => prisma.project.update({ where: { id }, data }),
    remove: (id) => prisma.project.delete({ where: { id } }),
  },
));

router.use("/skills", createCrudRouter(
  "Skill", skillSchema, skillSchema.partial(),
  {
    list: () => prisma.skill.findMany(ordered),
    get: (id) => prisma.skill.findUnique({ where: { id } }),
    create: (data) => prisma.skill.create({ data }),
    update: (id, data) => prisma.skill.update({ where: { id }, data }),
    remove: (id) => prisma.skill.delete({ where: { id } }),
  },
));

router.use("/experiences", createCrudRouter(
  "Experience", experienceSchema, experienceSchema.partial(),
  {
    list: () => prisma.experience.findMany(ordered),
    get: (id) => prisma.experience.findUnique({ where: { id } }),
    create: (data) => prisma.experience.create({ data }),
    update: (id, data) => prisma.experience.update({ where: { id }, data }),
    remove: (id) => prisma.experience.delete({ where: { id } }),
  },
));

router.use("/education", createCrudRouter(
  "Education", educationSchema, educationSchema.partial(),
  {
    list: () => prisma.education.findMany(ordered),
    get: (id) => prisma.education.findUnique({ where: { id } }),
    create: (data) => prisma.education.create({ data }),
    update: (id, data) => prisma.education.update({ where: { id }, data }),
    remove: (id) => prisma.education.delete({ where: { id } }),
  },
));

router.use("/social-links", createCrudRouter(
  "Social link", socialLinkSchema, socialLinkSchema.partial(),
  {
    list: () => prisma.socialLink.findMany(ordered),
    get: (id) => prisma.socialLink.findUnique({ where: { id } }),
    create: (data) => prisma.socialLink.create({ data }),
    update: (id, data) => prisma.socialLink.update({ where: { id }, data }),
    remove: (id) => prisma.socialLink.delete({ where: { id } }),
  },
));

export default router;
