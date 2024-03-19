import { ReactNode } from 'react';

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
	const onDeletePublicationClick = () => {
		console.log('Deleted id', publication.id);
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
