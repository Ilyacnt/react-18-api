import { z } from 'zod';

export const publicationCreateFormSchema = z.object({
	title: z.string().min(5, 'Min title length: 5'),
	body: z.string().min(5, 'Min body length: 5'),
});

export type TPublicationCreateFormSchema = z.infer<typeof publicationCreateFormSchema>;
