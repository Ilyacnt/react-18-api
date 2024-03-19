const titleStubCreate = 'Hello, Cypress!';
const bodyStubCreate = 'Cypress is a next generation front end testing tool built for the modern web.';

const titleStubUpdate = 'Bye, Cypress!';
const bodyStubUpdate = 'Been Good to Know Ya';

describe('Publications Page', () => {
	it('sholud create publication', () => {
		cy.visit('/publications');

		cy.get('[aria-label="Create publication"]').click();

		cy.get('[aria-label="Title input"]').type(titleStubCreate);
		cy.get('[aria-label="Body input"]').type(bodyStubCreate);

		cy.get('form').submit();

		cy.get('[aria-label="Publication card"]').last().contains(titleStubCreate).should('be.visible');
		cy.get('[aria-label="Publication card"]').last().contains(bodyStubCreate).should('be.visible');
	});

	it('should show all publications if filter not selected', () => {
		cy.visit('/publications');

		cy.get('[aria-label="Publication card"]').should('have.length', 3);
	});

	it('should show only my publications if filter selected', () => {
		cy.visit('/publications');

		cy.get('[aria-label="Show only mine publications"]').click();

		cy.get('[aria-label="Publication card"]').should('have.length', 2);
	});

	it('should update created publication', () => {
		cy.visit('/publications');

		cy.get('[aria-label="Edit publication"]').last().click();

		cy.get('input').should('have.value', titleStubCreate);
		cy.get('textarea').should('have.value', bodyStubCreate);

		cy.get('input').clear().type(titleStubUpdate);
		cy.get('textarea').clear().type(bodyStubUpdate);

		cy.get('form').submit();

		cy.get('[aria-label="Publication card"]').last().contains(titleStubUpdate).should('be.visible');
		cy.get('[aria-label="Publication card"]').last().contains(bodyStubUpdate).should('be.visible');
	});

	it('should delete created publication', () => {
		cy.visit('/publications');

		cy.get('[aria-label="Delete publication"]').last().click();

		cy.contains('Delete').click();
		cy.get('[aria-label="Publication card"]').last().contains(titleStubUpdate).should('not.exist');
		cy.get('[aria-label="Publication card"]').last().contains(bodyStubUpdate).should('not.exist');
	});
});
