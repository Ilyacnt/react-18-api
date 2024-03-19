import { useState } from 'react';

import { useQuery } from '@apollo/client';

import { useAppSelector } from '@/app/app-store';
import { GET_ALL_PUBLICATIONS_GQL, TGetAllPublicationReturnType } from '@/entities/publication/api/publication-api';
import { PublicationCard } from '@/entities/publication/ui/publication-card';
import { selectUserId } from '@/entities/session/model/session-selectors';
import { PublicationCreate } from '@/features/publication-create/ui/publication-create';
import { PublicationDeleteButton } from '@/features/publication-delete/ui/publication-delete-button';
import { PublicationDeleteDialog } from '@/features/publication-delete/ui/publication-delete-dialog';
import { PublicationEditButton } from '@/features/publication-edit/ui/publication-edit-button';
import { PublicationEditDialog } from '@/features/publication-edit/ui/publication-edit-dialog';
import Plus from '@/shared/assets/plus.svg?react';
import { Button } from '@/shared/ui/button';
import { Switch } from '@/shared/ui/switch';

export function PublicationPage() {
	const [onlyMinePublications, setOnlyMinePublications] = useState<boolean>(false);

	const userId = useAppSelector(selectUserId);

	const { data: publicationsData, loading: isPublicationsLoading } = useQuery<TGetAllPublicationReturnType>(
		GET_ALL_PUBLICATIONS_GQL,
		{ variables: { filter: { user_id: onlyMinePublications ? userId : undefined } } },
	);

	const onFilterMinePublicationsChange = (checked: boolean) => {
		setOnlyMinePublications(checked);
	};

	return (
		<div className='w-full'>
			<div className='flex items-center gap-3'>
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
				<span className='ml-3 flex items-center gap-2'>
					Show only mine:{' '}
					<Switch
						checked={onlyMinePublications}
						onCheckedChange={onFilterMinePublicationsChange}
					/>
				</span>
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
