// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string().optional(),
  coverImage: z.string().optional(),
});

const postsEn = defineCollection({
  schema: postSchema,
});

const postsEs = defineCollection({
  schema: postSchema,
});

export const collections = {
  'posts-en': postsEn,
  'posts-es': postsEs,
};
export const SITE_TITLE = 'A Developer’s Journal';
export const SITE_DESCRIPTION = 'Notes on building, learning, and shipping meaningful products.';
export const HOMEPAGE_URL = 'https://bio.hacklab.dog/';
