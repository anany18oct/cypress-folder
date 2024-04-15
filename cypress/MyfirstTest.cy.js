/// <reference types="cypress" />
it('Google Test',function(){
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('Automation step by step{enter}')
})