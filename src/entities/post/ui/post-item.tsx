import moment from 'moment';

import { TPost } from '../model/types';
import Eye from '@/shared/assets/eye.svg?react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

type TPostItem = TPost;

export function PostItem({ title, views, description, createdAt, dividerColor }: TPostItem) {
	return (
		<Card className='w-full flex flex-col'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2 text-lg'>
					{title}{' '}
					<div
						style={{
							background:
								dividerColor && dividerColor !== 'white' && dividerColor !== 'ivory'
									? dividerColor
									: 'tomato',
						}}
						className='w-2 h-2 bg-red-500 inline-block rounded-full'
					></div>
				</CardTitle>
				<CardDescription>
					<span className='flex gap-1 items-center'>
						Views: {views} <Eye className='w-5 h-5' />
					</span>
				</CardDescription>
				<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
			</CardHeader>
			<CardContent className='flex flex-col justify-between h-full '>
				<div>{description}</div>
				<div>
					<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
					<div>Created: {moment(createdAt, 'YYYYMMDD').fromNow()}</div>
				</div>
			</CardContent>
		</Card>
	);
}
