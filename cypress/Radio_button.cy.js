/// <reference types="cypress" />
describe('Checking How to Handle Radio Buttons',function(){
    it('Checking how to Handle Radio Buttons',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        //checking visibility of radio buttons.
        cy.get('input#male').should('be.visible')
        // cy.get('input#female').should('be.visible')

        //selecting of radionbuttons for Male 
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')

        //selecting of Radiobuttons for female
        cy.get('input#female').check().should('be.checked')
        cy.get('input#male').should('not.be.checked')



        
        
    })
})