import { z } from "zod";

const text = z.string().trim().min(1);
const url = z.string().url();
const sortOrder = z.number().int().min(0).optional();

export const profileSchema = z.object({
  name: text,
  greeting: text,
  description: text,
});

export const bioSchema = z.object({ content: text, sortOrder });
export const projectSchema = z.object({
  name: text,
  description: text,
  imageUrl: url.optional().nullable(),
  githubUrl: url,
  tryUrl: url,
  sortOrder,
});
export const skillSchema = z.object({ name: text, experience: text, icon: text.optional().nullable(), sortOrder });
export const experienceSchema = z.object({ title: text, company: text, duration: text, description: text, sortOrder });
export const educationSchema = z.object({ degree: text, institution: text, duration: text, description: text, sortOrder });
export const socialLinkSchema = z.object({ platform: text, url, sortOrder });
