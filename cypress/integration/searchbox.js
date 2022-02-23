describe('Searchbox', () => {
    beforeEach(() => {
        cy.visit('https://www.empik.com/')
    })

    it('search harry potter', () => {
        cy.get('.main-search__container')
            .click()
            .type('harry')
        cy.get('.ta-search-field-ac')
            .contains('harry potter')
            .click()
        cy.get('.colorBlack')
            .should('contain.text', 'Harry potter')
    })
})