/// <reference types="cypress" />
it('Postive test for OrangeHRM Login',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
})
it('Negative Test gor Opencart Login',function(){

    cy.visit('https://www.opencart.com/?route=account/login')
    cy.title().should('eq','OpenCart')
})