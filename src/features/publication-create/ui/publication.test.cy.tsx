import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';

import { PublicationCreate } from './publication-create';
import { apolloClient } from '@/app/app-apollo-client';
import { appStore } from '@/app/app-store';
import { Button } from '@/shared/ui/button';

describe('PublicationCreate feature component', () => {
	it('renders', () => {
		cy.mount(
			<ApolloProvider client={apolloClient}>
				<ReduxProvider store={appStore}>
					<PublicationCreate trigger={<Button aria-label='Create publication'>Create</Button>} />
				</ReduxProvider>
			</ApolloProvider>,
		);

		cy.get('[aria-label="Create publication"]').should('exist');
	});

	it('should open dialog on click', () => {
		cy.mount(
			<ApolloProvider client={apolloClient}>
				<ReduxProvider store={appStore}>
					<PublicationCreate trigger={<Button aria-label='Create publication'>Create</Button>} />
				</ReduxProvider>
			</ApolloProvider>,
		);

		cy.get('[aria-label="Create publication"]').click();

		cy.get('[role="dialog"]').should('be.visible');
	});

	it('should send request on create', () => {
		cy.intercept({ method: 'POST', url: 'http://localhost:3077' }, []).as('createPublication');

		cy.mount(
			<ApolloProvider client={apolloClient}>
				<ReduxProvider store={appStore}>
					<PublicationCreate trigger={<Button aria-label='Create publication'>Create</Button>} />
				</ReduxProvider>
			</ApolloProvider>,
		);

		cy.get('[aria-label="Create publication"]').click();

		cy.get('input').type('Test publication');
		cy.get('textarea').type('Test description');
		cy.contains('Submit').click();

		cy.wait('@createPublication').then(interception => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			assert.isNotNull(interception.response.body, '1st API call has data');
		});
	});
});
