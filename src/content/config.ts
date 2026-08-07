import { defineCollection, z } from 'astro:content';

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    // marks this as an open question people can respond to
    openQuestion: z.boolean().default(true),
  }),
});

export const collections = { knowledge };
