import { z } from 'zod';

export const PostSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	views: z.number(),
	dividerColor: z.string(),
	createdAt: z.string().optional(),
});

export const PostsSchema = z.array(PostSchema);

export type TPost = z.infer<typeof PostSchema>;
