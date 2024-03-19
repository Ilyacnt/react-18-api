import { ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TPublicationCreateFormSchema, publicationCreateFormSchema } from '../model/types';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

type TPublicationCreateProps = {
	trigger: ReactNode;
};

export function PublicationCreate({ trigger }: TPublicationCreateProps) {
	const form = useForm<TPublicationCreateFormSchema>({
		defaultValues: { title: '', body: '' },
		resolver: zodResolver(publicationCreateFormSchema),
	});

	// TODO: Обработать mutation на submit
	const onPublicationCreateSubmit = (data: TPublicationCreateFormSchema) => {
		console.log(data);
	};

	return (
		<Dialog>
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
