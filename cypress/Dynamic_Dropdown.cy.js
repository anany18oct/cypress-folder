describe('Handling Dynamic DropDown',function(){

    it('Handling Dynamic DropDown Functionality test',function(){
        cy.visit('https://www.yatra.com/',{headers:{"Accept-Encoding":"gzip,deflate"}})
        cy.get('#BE_flight_origin_city').click().clear().type(" New ",{delay:200})
        cy.get('.viewport span:nth-child(n)').each(($el,index,$list) =>{
            cy.log($el.text())
            if($el.text() === 'JFK')
               cy.wrap($el).click()
        })


    
    })




})
