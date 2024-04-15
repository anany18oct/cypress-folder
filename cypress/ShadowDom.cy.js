describe('Shadow Dom',function(){
    it('Handle of Shadow Dom',function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('#userName',{includeShadowDom:true},{timeout:12000})
         .should('exist')
         .should('be.visible')
         .shadow().find('#app2')
         .shadow()
         .find('#pizza').type('yummy');
    })
})