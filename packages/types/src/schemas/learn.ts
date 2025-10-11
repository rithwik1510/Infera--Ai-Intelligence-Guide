import { z } from "zod";

export const learnResourceSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  type: z.enum(["article", "video", "docs", "github", "exercise"]),
  description: z.string().optional(),
});

export const learnModuleSchema = z.object({
  title: z.string(),
  objective: z.string(),
  resources: z.array(learnResourceSchema).min(1).max(5),
  task: z.string(),
});

export const capstoneSchema = z.object({
  title: z.string(),
  brief: z.string(),
  deliverable: z.string(),
});

export const badgeSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const learnTrackSchema = z.object({
  id: z.string(),
  title: z.string(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  timeEstimateHours: z.number().int().positive(),
  outcome: z.string(),
  modules: z.array(learnModuleSchema).min(3),
  capstone: capstoneSchema,
  badge: badgeSchema,
});

export type LearnResource = z.infer<typeof learnResourceSchema>;
export type LearnModule = z.infer<typeof learnModuleSchema>;
export type LearnCapstone = z.infer<typeof capstoneSchema>;
export type LearnBadge = z.infer<typeof badgeSchema>;
export type LearnTrack = z.infer<typeof learnTrackSchema>;
