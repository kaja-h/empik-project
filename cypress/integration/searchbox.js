describe('Searchbox', () => {
    beforeEach(() => {
        cy.visit('https://www.empik.com/')
    })

    it('search harry potter', () => {
        cy.get('.css-1vl1nnj-input-input-1')
            .click()
            .type('harry')
        cy.get('.ta-search-field-ac')
            .contains('harry potter')
            .click()
        cy.get('.colorBlack')
            .should('contain.text', 'Harry potter')
    })
})