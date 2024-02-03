import { TPost } from '../model/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

type TPostItem = TPost;

export function PostItem({ title, views }: TPostItem) {
	return (
		<Card className='w-[180px]'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>Views: {views}</CardDescription>
			</CardHeader>
			<CardContent>
				<div>some content</div>
			</CardContent>
		</Card>
	);
}
