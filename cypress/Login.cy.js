/// <reference types="cypress" />
describe('Registration Functionality',function(){

    it('Login  Functionality ',function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=AB7EA963DA60D42C74F7F8F72F33E197')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('cvx.1')
        cy.get('#loginPanel > form > div:nth-child(4) > input').type('cvx@12')
        cy.get('#loginPanel > form > div:nth-child(5) > input').click()
        cy.get('#topPanel > p').should('have.text','Experience the difference')
        // cy.get('#rightPanel > p').should('have.text','An internal error has occurred and has been logged.')
        // cy.get('#accountTable > tbody > tr.ng-scope > td:nth-child(1) > a').click()
        // cy.get('#month').select(1)
        // cy.get('#month').select('January')
        // cy.get('#transactionType')
        // cy.get('#transactionType').select('Credit')
        // cy.get('#rightPanel > div > div:nth-child(2) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input').click()
        // cy.get('#rightPanel > div > div:nth-child(2) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input').contains(" An internal error has occurred and has been logged.")
})
})
