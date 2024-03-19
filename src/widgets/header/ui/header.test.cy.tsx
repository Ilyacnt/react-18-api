import { BrowserRouter } from 'react-router-dom';

import { Header } from './header';

describe('Header component', () => {
	it('renders', () => {
		cy.viewport(900, 100);

		cy.mount(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);

		cy.get('[aria-label="Header"]').should('exist');
	});
});
