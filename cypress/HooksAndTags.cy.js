describe('Hooks and Tags',function(){

    before(function(){
        
        cy.log("******launch App*********")
    })

    it('for search functionality',function(){

        cy.log('****** searching ********');

    })


    it('for advanced search',function(){

        cy.log('****** advanced searching ********')

    })


    it('for a listing products',function(){

        cy.log('****** listing Products ********')

    })
    after(function(){
        cy.log("*****logout******")
    })
})