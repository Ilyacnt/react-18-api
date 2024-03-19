import { z } from 'zod';

export const publicationEditFormSchema = z.object({
	title: z.string(),
	body: z.string(),
});

export type TPublicationEditFormSchema = z.infer<typeof publicationEditFormSchema>;
