describe('Registration Functionality',function(){

    it('Para Bank Functionality test',function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=AB7EA963DA60D42C74F7F8F72F33E197')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > [width="20%"]').type('rcv')
        cy.get("input[id ='customer.lastName']").type('Academy')
        cy.get("input[id ='customer.address.street']").type('Delhi')
        cy.get("input[id ='customer.address.city']").type('saket')
        cy.get("input[id ='customer.address.state']").type('new delhi')
        cy.get("input[id ='customer.address.zipCode']").type('110068')
        cy.get("input[id ='customer.phoneNumber']").type('87675569')
        cy.get("input[id ='customer.ssn']").type('21232')
        cy.get("input[id ='customer.username']").type('cvx.1')
        cy.get("input[id ='customer.password']").type('cvx@12')
        cy.get("input[id ='repeatedPassword']").type('cvx@12')
        
        cy.get('[colspan="2"] > .button').click()
        cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')

        // cy.get("span[id='customer.username.errors']").contains('username already exists.')


    
    })




})
