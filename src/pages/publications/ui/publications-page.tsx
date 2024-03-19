import { useQuery } from '@apollo/client';

import { GET_ALL_PUBLICATIONS_GQL, TGetAllPublicationReturnType } from '@/entities/publication/api/publication-api';
import { PublicationCard } from '@/entities/publication/ui/publication-card';
import { PublicationCreate } from '@/features/publication-create/ui/publication-create';
import { PublicationDeleteButton } from '@/features/publication-delete/ui/publication-delete-button';
import { PublicationDeleteDialog } from '@/features/publication-delete/ui/publication-delete-dialog';
import { PublicationEditButton } from '@/features/publication-edit/ui/publication-edit-button';
import { PublicationEditDialog } from '@/features/publication-edit/ui/publication-edit-dialog';
import Plus from '@/shared/assets/plus.svg?react';
import { Button } from '@/shared/ui/button';

export function PublicationPage() {
	const { data: publicationsData, loading: isPublicationsLoading } =
		useQuery<TGetAllPublicationReturnType>(GET_ALL_PUBLICATIONS_GQL);

	return (
		<div className='w-full'>
			<div className='flex gap-3'>
				<span className='text-2xl font-medium'>Latest publications</span>
				<PublicationCreate
					trigger={
						<Button
							variant={'outline'}
							size={'icon'}
						>
							<Plus />
						</Button>
					}
				/>
			</div>

			{isPublicationsLoading ? (
				<div className='mt-8'>Loading...</div>
			) : (
				<div className='grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 mt-8'>
					{publicationsData?.allPublications.map(publication => (
						<PublicationCard
							key={publication.id}
							publication={publication}
							editButtonSlot={
								<PublicationEditDialog
									publication={publication}
									trigger={<PublicationEditButton />}
								/>
							}
							deleteButtonSlot={
								<PublicationDeleteDialog
									publication={publication}
									trigger={<PublicationDeleteButton />}
								/>
							}
						/>
					))}
				</div>
			)}
		</div>
	);
}
