/// <reference types="cypress" />
it('Access Element',function(){
    cy.visit('https://glo.globallogic.com/')
    cy.get('img')
    cy.get('#login').type('anany.mishra@globallogic.com')
    cy.get('#password').type('')
    cy.get('.login-action > .btn').click()
})