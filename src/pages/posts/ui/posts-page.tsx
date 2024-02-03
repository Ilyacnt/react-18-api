import { useGetPostsQuery } from '@/entities/post/api/post-api';
import { PostItem } from '@/entities/post/ui/post-item';

export function PostsPage() {
	const { data, isLoading } = useGetPostsQuery();

	if (isLoading) return <div>Loader...</div>;

	return (
		// TODO: Make PageWrapper component
		<div className='w-full'>
			<div className='w-full flex flex-wrap gap-2'>
				{data?.map(post => (
					<PostItem
						id={post.id}
						title={post.title}
						views={post.views}
						key={post.id}
					/>
				))}
			</div>
		</div>
	);
}
