describe('checkbox functionality on automationpractice.com',function(){

    it('Checkbox demo',function(){
        cy.visit('http://www.automationpractice.pl/index.php',{headers:{"Accept-Encoding":"gzip,deflate"}})
        cy.get('#block_top_menu > ul > li:nth-child(1) > a').click()
        // checked the checkboxes and verfiy them
        cy.get('.checkbox').check().parent().should('have.class','checked')
        // now uncheck all the checkboxes and verify them

        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
    })
    it.only('Checkbox demo on Snapdeal',function(){
        cy.visit('https://www.snapdeal.com/',{headers:{"Accept-Encoding":"gzip,deflate"}})
        cy.get('#inputValEnter').type('Laptop')
       
    })


})