describe('Address', () => {
    beforeEach(() => {
        cy.visit('https://www.empik.com/')
    })

    it('log in and select empik store', () => {
        cy.get('.empikNav__user > .empikNav__userLink.userMenu')
            .click()
        cy.get('input#user-email')
            .type('xitofe3408@chatich.com')
            .should('have.value', 'xitofe3408@chatich.com')
        cy.get('.show .e-btn--primary')
            .click()
        cy.get('input#user-password')
            .type('Pzt9r!KuUSq!tBE!fSWAH$MT%')
            .should('have.value', 'Pzt9r!KuUSq!tBE!fSWAH$MT%')
        cy.get('.show .e-btn--primary')
            .click()
        cy.get('.empikNav__user > .empikNav__userLink.userMenu')
            .click({waitForAnimations: false})
        cy.url().should('include', '/twoje-konto')
        cy.get('a[title=\'Adresy\']')
            .click()
        cy.url().should('include', '/twoje-konto/adresy')
        cy.get('.cartOption__wrap.ta-addDeliveryPoint  .userAddress__addIcon')
            .click()
        cy.get('input[name=\'query\']')
            .type('Gdańsk')
            .should('have.value', 'Gdańsk')
        cy.get('.inlineImage--search .ng-binding')
            .click()
        cy.get('[data-id="32"] > .deliveryPointData__choose > .e-btn')
            .click()
        cy.get('.ng-binding.ng-scope')
            .should('contain.text', 'Gdańsk Alfa (SP)')
        cy.get('.ta-removeAddressBtn')
            .click()
    })
})