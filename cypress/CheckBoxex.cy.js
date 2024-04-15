/// <reference types="cypress" />
describe('Checking for CheckBoxes',function(){
    it('Check for CheckBoxes',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        //visibilty of element
        // cy.get('input#sunday').should('be.visible')
        //selecting single checkbox
        // cy.get('input#sunday').check().should('be.checked')

        //unselecting the checkbox
        // cy.get('input#sunday').uncheck().should('not.be.checked')
        // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        // cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
    })
})