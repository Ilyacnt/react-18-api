import { ReactNode } from 'react';

import { TPublication } from '../model/types';
import Eye from '@/shared/assets/eye.svg?react';
import Person from '@/shared/assets/person.svg?react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

type TPublicationCardProps = {
	publication: TPublication;
	editButtonSlot?: ReactNode;
	deleteButtonSlot?: ReactNode;
};

export const PublicationCard = ({ publication, editButtonSlot, deleteButtonSlot }: TPublicationCardProps) => {
	return (
		<Card
			className='w-full flex flex-col'
			aria-label='Publication card'
		>
			<CardHeader className='justify-between h-full'>
				<CardTitle className='flex items-center gap-2 text-lg justify-between'>
					<p>{publication.title}</p>
					<div className='flex gap-3'>
						{editButtonSlot}
						{deleteButtonSlot}
					</div>
				</CardTitle>
				<hr />
				<CardContent className='pl-0 pb-3'>{publication.body}</CardContent>
				<CardDescription className='flex flex-row gap-4'>
					<span className='flex gap-1 items-center'>
						Views: {publication.views} <Eye className='w-5 h-5' />
					</span>
					<span className='flex gap-1 items-center'>
						Author: {publication.User?.name} ({publication.user_id}) <Person className='w-5 h-5' />
					</span>
				</CardDescription>
			</CardHeader>
		</Card>
	);
};
