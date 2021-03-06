describe('Library', () => {
    beforeEach(() => {
        cy.visit('https://www.empik.com/')
    })

    it('log in and check library', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        
        cy.get('.empikNav__user > .empikNav__userLink.userMenu')
            .click()
        cy.get('input#user-email')
            .type(username)
            .should('have.value', username)
        cy.get('.show .e-btn--primary')
            .click()
        cy.get('input#user-password')
            .type(password, { log: false })
            .should(el$ => {
                if (el$.val() !== password) {
                  throw new Error('Different value of typed password')
                }
              })
        cy.get('.show .e-btn--primary')
            .click()
        cy.get('.empikNav__user > .empikNav__userLink.userMenu')
            .click({waitForAnimations: false})
        cy.url().should('include', '/twoje-konto')
        cy.get('a[title=\'Moja biblioteka\']')
            .click()
        cy.url().should('include', '/twoje-konto/schowek/moja-biblioteczka')
        cy.get('.showAllLink')
            .click()
        cy.url().should('include', '/twoje-konto/produkty-cyfrowe/mp3')
        cy.get('.menuNav [href=\'\\/twoje-konto\\/produkty-cyfrowe\\/ebooki\']')
            .click()
        cy.url().should('include', '/twoje-konto/produkty-cyfrowe/ebooki')
        cy.get('[href=\'\\/twoje-konto\\/produkty-cyfrowe\\/audiobooki\']')
            .click()
        cy.url().should('include', '/twoje-konto/produkty-cyfrowe/audiobooki')
        cy.get('[href=\'\\/twoje-konto\\/produkty-cyfrowe\\/gry\']')
            .click()
        cy.url().should('include', '/twoje-konto/produkty-cyfrowe/gry')
        cy.get('[href=\'\\/twoje-konto\\/produkty-cyfrowe\\/mp3\']')
            .click()
        cy.url().should('include', '/twoje-konto/produkty-cyfrowe/mp3')
        cy.get('[href=\'\\/twoje-konto\\/produkty-cyfrowe\\/bilety\']')
            .click()
        cy.url().should('include', '/twoje-konto/produkty-cyfrowe/bilety')
    })
})