import { Input } from './input';

const stubText = 'Hello, Cypress!';

describe('Input component', () => {
	it('renders', () => {
		cy.mount(<Input />);

		cy.get('input').should('exist');
	});

	it('have a correct value on typing', () => {
		cy.mount(<Input />);

		cy.get('input').type(stubText);

		cy.get('input').should('have.value', stubText);
	});

	it('should call onChange callback', () => {
		const stubOnChange = cy.stub();

		cy.mount(<Input onChange={stubOnChange} />);

		cy.get('input')
			.type(stubText)
			.then(() => {
				expect(stubOnChange).to.have.callCount(stubText.length);
			});
	});
});
