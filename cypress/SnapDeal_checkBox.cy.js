describe('SnapDeal functionality',function(){
    it('checkbox Functionality',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('Mackbook')
        cy.get('#nav-search-submit-button').click()
        cy.get('#brandsRefinements > ul').check()
    })
})