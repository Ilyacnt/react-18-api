import { ReactNode } from 'react';

import { useMutation } from '@apollo/client';

import { DELETE_PUBLICATION_GQL } from '@/entities/publication/api/publication-api';
import { TPublication } from '@/entities/publication/model/types';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';

type TPublicationDeleteProps = {
	publication: TPublication;
	trigger: ReactNode;
};

export function PublicationDeleteDialog({ publication, trigger }: TPublicationDeleteProps) {
	const [deletePublication] = useMutation(DELETE_PUBLICATION_GQL, { refetchQueries: ['getAllPublications'] });

	const onDeletePublicationClick = async () => {
		try {
			await deletePublication({ variables: { id: publication.id } });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger>{trigger}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						{`This action will delete "${String(publication.title)}" publication.`}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onDeletePublicationClick}>Delete</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
