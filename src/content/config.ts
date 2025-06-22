// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { posts };