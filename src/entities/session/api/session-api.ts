import { TRequestLoginBody } from './types';
import { TSession } from '../model/types';
import { EMethodHTTP } from '@/shared/api/constants';
import { rootApi } from '@/shared/api/root-api';

export const sessionApi = rootApi.injectEndpoints({
	endpoints: build => ({
		login: build.mutation<TSession, TRequestLoginBody>({
			query: body => ({
				url: '/login',
				method: EMethodHTTP.POST,
				body,
			}),
		}),
	}),
});

export const { useLoginMutation } = sessionApi;
