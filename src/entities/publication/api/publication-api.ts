import { gql } from '@apollo/client';

import { TPublication } from '../model/types';

export type TGetAllPublicationReturnType = {
	allPublications: TPublication[];
};

export const GET_ALL_PUBLICATIONS_GQL = gql`
	query getAllPublications {
		allPublications {
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
