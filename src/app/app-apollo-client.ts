import { ApolloClient, InMemoryCache } from '@apollo/client';

import { API_BASE_URL_GRAPHQL } from '@/shared/api/constants';

export const apolloClient = new ApolloClient({
	uri: API_BASE_URL_GRAPHQL + '/',
	cache: new InMemoryCache(),
});
