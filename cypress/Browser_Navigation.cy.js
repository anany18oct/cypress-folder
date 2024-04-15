describe('my Suit',()=>{
    it('Navigate Browser',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get('h2').should('have.text','Cameras')
        cy.go('back')
        
        cy.title().should('eq','Your Store');
        cy.go('forward')
        cy.reload()
    })
})