import { useState, useTransition } from 'react';

import { useGetPostsQuery } from '@/entities/post/api/post-api';
import { TPost } from '@/entities/post/model/types';
import { PostItem } from '@/entities/post/ui/post-item';
import { useDebounceCallback } from '@/shared/lib/use-debounce-callback';
import { Badge } from '@/shared/ui/badge';
import { Input } from '@/shared/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';

type TSearchByField = keyof Pick<TPost, 'title' | 'description'>;

export function PostsPageTransition() {
	const [isPending, startTransition] = useTransition(); /* <- */

	/* Search */
	const [searchValue, setSearchValue] = useState<string>('');
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchByField, setSearchByField] = useState<TSearchByField>('description');

	const setSearchTermDebounced = useDebounceCallback(setSearchTerm, 500);

	const onSearchByFieldChange = (value: TSearchByField) => {
		startTransition(() => {
			setSearchByField(value);
		});
	};

	const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);

		startTransition(() => {
			setSearchTermDebounced(event.target.value);
		});
	};

	const { data: posts, isFetching: postsIsFetching } = useGetPostsQuery({
		searchBy: searchByField,
		searchTerm: searchTerm,
		sortBy: 'createdAt',
	});

	return (
		// TODO: Make PageWrapper component
		<div className='w-full'>
			<Badge className='mb-3'>useTransition</Badge>
			<div className='flex gap-2'>
				<Input
					placeholder='Search...'
					value={searchValue}
					onChange={onSearchChange}
				/>
				<Select
					defaultValue={searchByField}
					value={searchByField}
					onValueChange={onSearchByFieldChange}
				>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Search by...' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fields</SelectLabel>
							<SelectItem value='title'>Title</SelectItem>
							<SelectItem value='description'>Description</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
			<div className=' grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{postsIsFetching ? (
					<div>Loading...</div>
				) : isPending ? (
					<div>rendering</div>
				) : (
					posts?.map(post => (
						<PostItem
							id={post.id}
							description={post.description}
							dividerColor={post.dividerColor}
							title={post.title}
							views={post.views}
							createdAt={post.createdAt}
							key={post.id}
						/>
					))
				)}
			</div>
		</div>
	);
}
