import { gql } from '@apollo/client';

import { TPublication } from '../model/types';

export type TGetAllPublicationReturnType = {
	allPublications: TPublication[];
};

export const GET_ALL_PUBLICATIONS_GQL = gql`
	query getAllPublications($filter: PublicationFilter) {
		allPublications(filter: $filter) {
			id
			title
			body
			views
			user_id
			User {
				name
			}
		}
	}
`;

export type TCreatePublicationReturnType = {
	createPublication: TPublication;
};

export const CREATE_PUBLICATION_GQL = gql`
	mutation createPublication($title: String!, $body: String!, $views: Int!, $user_id: ID!) {
		createPublication(title: $title, body: $body, views: $views, user_id: $user_id) {
			id
			title
			body
			views
			user_id
		}
	}
`;

export type TUpdatePublicationReturnType = {
	updatePublication: TPublication;
};

export const UPDATE_PUBLICATION_GQL = gql`
	mutation UpdatePublication($id: ID!, $title: String, $body: String, $views: Int) {
		updatePublication(id: $id, title: $title, body: $body, views: $views) {
			id
			title
			body
			views
		}
	}
`;

export type TDeletePublicationReturnType = { deletePublication: Pick<TPublication, 'id'> };

export const DELETE_PUBLICATION_GQL = gql`
	mutation deletePublication($id: ID!) {
		removePublication(id: $id) {
			id
		}
	}
`;
