import { ReactNode, useState } from 'react';

import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TPublicationEditFormSchema, publicationEditFormSchema } from '../model/types';
import { UPDATE_PUBLICATION_GQL } from '@/entities/publication/api/publication-api';
import { TPublication } from '@/entities/publication/model/types';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

type TPublicationEditDialogProps = {
	publication: TPublication;
	trigger: ReactNode;
};

export function PublicationEditDialog({ publication, trigger }: TPublicationEditDialogProps) {
	const [open, setOpen] = useState<boolean>(false);

	const [updatePublication] = useMutation(UPDATE_PUBLICATION_GQL, { refetchQueries: ['getAllPublications'] });

	const form = useForm<TPublicationEditFormSchema>({
		defaultValues: { title: publication.title, body: publication.body },
		resolver: zodResolver(publicationEditFormSchema),
	});

	const onPublicationEditSubmit = async (data: TPublicationEditFormSchema) => {
		try {
			await updatePublication({
				variables: {
					id: publication.id,
					title: data.title,
					body: data.body,
				},
			});

			setOpen(false);
		} catch (error) {
			console.error(error);
		}

		console.log(data);
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit publication: {publication.title}</DialogTitle>
					<DialogDescription>Publication will be updated only if it's yours.</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						className='flex flex-col gap-4'
						onSubmit={form.handleSubmit(onPublicationEditSubmit)}
					>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											placeholder={field.name}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='body'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Body</FormLabel>
									<FormControl>
										<Textarea
											className='h-32'
											placeholder={field.name}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							variant='outline'
							type='submit'
						>
							Submit
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
