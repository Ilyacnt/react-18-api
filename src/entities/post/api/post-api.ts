import { PostsSchema, TPost } from '../model/types';
import { rootApi } from '@/shared/api/root-api';

export const postApi = rootApi.injectEndpoints({
	endpoints: builder => ({
		getPosts: builder.query<TPost[], { searchBy?: keyof TPost; searchTerm?: string; sortBy?: keyof TPost }>({
			query: params => ({
				url: '/posts',
				params: { [`${params.searchBy}_like`]: params.searchTerm, _sort: params.sortBy },
			}),
			extraOptions: {
				zodSchema: PostsSchema,
			},
		}),
	}),
});

export const { useGetPostsQuery } = postApi;
