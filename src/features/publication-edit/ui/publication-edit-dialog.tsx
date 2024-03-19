import { ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TPublicationEditFormSchema, publicationEditFormSchema } from '../model/types';
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
	const form = useForm<TPublicationEditFormSchema>({
		defaultValues: { title: publication.title, body: publication.body },
		resolver: zodResolver(publicationEditFormSchema),
	});

	// TODO: Обработать mutation на submit
	const onPublicationEditSubmit = (data: TPublicationEditFormSchema) => {
		console.log(data);
	};

	return (
		<Dialog>
			<DialogTrigger>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit publication: {publication.id}</DialogTitle>
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
