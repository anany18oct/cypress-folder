/// <reference types="cypress" />
describe('Css Locators',function(){

    it('css locators',function(){
        cy.visit("https://www.amazon.in/cart?ref_=sw_gtc")
        // cy.get('#nav-xshop>a.nav-a').click()
        cy.get('#nav-xshop>a:nth-child(4)').click()
        cy.xpath('//*[@id="nav-xshop"]/a[6]').click()
        
        cy.get("#nav-main>.nav-left>#nav-hamburger-menu")
    })
})