describe('To do Calc', () => {
    it('Shoud return true when title of menu was correct', () => {
        cy.visit('/');

        cy.contains('Testing Cypress').should('to.have.length', 1);
    })

    it('Should to calc the two inputs values', () => {
        cy.visit('/');

        cy.get('[id=firstValue]').type(2);
        cy.get('[id=secondValue]').type(3);
        cy.get('[data-cy=calcButton]').click();

        cy.get('[id=result]').should('have.value', 5);
    })

    it('Should to clear the inputs values', () => {
        cy.visit('/');
        
        cy.get('[data-cy=clearButton]').click();
        
        cy.get('[id=firstValue]').should('be.empty');
        cy.get('[id=secondValue]').should('be.empty');
        cy.get('[id=result]').should('be.empty');
    })
})
