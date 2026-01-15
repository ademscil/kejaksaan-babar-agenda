import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['Draft', 'Publish']).default('Draft'),
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Pengajian', 'Penyuluhan Hukum', 'Kunjungan Kerja', 'Rapat Koordinasi', 'Upacara', 'Bakti Sosial', 'Lainnya']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    location: z.string().optional(),
    coverImage: z.string(),
    galleryImages: z.array(z.string()).optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['Draft', 'Publish']).default('Draft'),
    title: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    eventStatus: z.enum(['Akan Datang', 'Selesai']),
    excerpt: z.string(),
  }),
});

const galleries = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['Draft', 'Publish']).default('Draft'),
    title: z.string(),
    date: z.coerce.date(),
    coverImage: z.string(),
    images: z.array(z.string()),
    description: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['Draft', 'Publish']).default('Draft'),
    title: z.string(),
    date: z.coerce.date(),
    youtubeUrl: z.string(),
    coverImage: z.string().optional(),
    description: z.string().optional(),
  }),
});

const documents = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['Draft', 'Publish']).default('Draft'),
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Peraturan', 'Surat', 'Materi', 'Lainnya']),
    file: z.string(),
    description: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  activities,
  events,
  galleries,
  videos,
  documents,
  pages,
};
