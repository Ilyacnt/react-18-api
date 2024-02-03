import { TPost } from '../model/types';
import { rootApi } from '@/shared/api/root-api';

export const postApi = rootApi.injectEndpoints({
	endpoints: builder => ({
		getPosts: builder.query<TPost[], void>({
			query: () => '/posts',
		}),
	}),
});

export const { useGetPostsQuery } = postApi;
