/// <reference types="cypress" />
describe('mysuite',function(){
    it('Capture ScreenShots and Videos ',function(){
        cy.visit('https://www.opencart.com/');
        cy.screenshot("Homepage");
        cy.wait(5000)
        cy.get("img[title='OpenCart - Open Source Shopping Cart Solution']").screenshot('Logo')
    })
})