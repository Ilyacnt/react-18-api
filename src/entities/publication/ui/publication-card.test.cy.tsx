import { PublicationCard } from './publication-card';
import { TPublication } from '../model/types';

const mockPublication: TPublication = {
	id: 1,
	title: 'Hello, Cypress',
	body: 'Cypress is a next generation front end testing tool built for the modern web.',
	views: 12,
	user_id: 1,
	User: {
		id: 1,
		name: 'Carolline Parker',
		publication_ids: ['1'],
	},
};

describe('PublicationCard component', () => {
	it('renders props in right way', () => {
		cy.mount(<PublicationCard publication={mockPublication} />);

		cy.get('[aria-label="Publication card"]').should('contain.text', mockPublication.title);
		cy.get('[aria-label="Publication card"]').should('contain.text', mockPublication.body);
		cy.get('[aria-label="Publication card"]').should('contain.text', `Views: ${mockPublication.views}`);
		cy.get('[aria-label="Publication card"]').should(
			'contain.text',
			`Author: ${mockPublication.User?.name} (${mockPublication.user_id})`,
		);
	});
});
