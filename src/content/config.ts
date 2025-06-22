// src/content/config.ts
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { posts };
export const SITE_TITLE = 'Tomy Maritano’s Idea Forge';
export const SITE_DESCRIPTION = 'Exploring thoughts, code, and curiosity—one post at a time.';
export const HOMEPAGE_URL = 'https://bio.hacklab.dog/';