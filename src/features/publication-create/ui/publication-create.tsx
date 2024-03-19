import { ReactNode, useState } from 'react';

import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TPublicationCreateFormSchema, publicationCreateFormSchema } from '../model/types';
import { useAppSelector } from '@/app/app-store';
import { CREATE_PUBLICATION_GQL, TCreatePublicationReturnType } from '@/entities/publication/api/publication-api';
import { selectUserId } from '@/entities/session/model/session-selectors';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

type TPublicationCreateProps = {
	trigger: ReactNode;
};

export function PublicationCreate({ trigger }: TPublicationCreateProps) {
	const [open, setOpen] = useState<boolean>(false);

	const [createPublication] = useMutation<TCreatePublicationReturnType>(CREATE_PUBLICATION_GQL, {
		refetchQueries: ['getAllPublications'],
	});

	const userId = useAppSelector(selectUserId);

	const form = useForm<TPublicationCreateFormSchema>({
		defaultValues: { title: '', body: '' },
		resolver: zodResolver(publicationCreateFormSchema),
	});

	const onPublicationCreateSubmit = async (data: TPublicationCreateFormSchema) => {
		try {
			const result = await createPublication({
				variables: {
					id: 1231,
					title: data.title,
					body: data.body,
					views: 1,
					user_id: userId,
				},
			});

			console.log(result.data);

			setOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Creating publication</DialogTitle>
					<DialogDescription>Publication will be created with your user id.</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						className='flex flex-col gap-4'
						onSubmit={form.handleSubmit(onPublicationCreateSubmit)}
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
									<FormMessage />
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
									<FormMessage />
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
