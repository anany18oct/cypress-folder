/// <reference types="cypress" />



describe('Http Request Test Suite',()=>{
    it('Get Call',()=>{
        cy.request('GET','https://reqres.in/api/unknown/3').its('status').should('equal',200)
    })

    it('Post call',()=>{
        const morpheus="Anany"
        const leader = "Mishra"
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{     
                
                    name: morpheus,
                    job: leader
                }
               
            }).its('status')
            .should('equal',201) 
        
    })
    it('Put request',function(){
        const morpheus="Anany"
        const leader = "Mishra"
        cy.request({

                method:'PUT',
                url:'https://reqres.in/api/users/2',
                body:{              
                    
                    name: morpheus,
                    job: leader
                    
                }

            

        }).its('status')
        .should('equal',200)
    })
    it('Delete Request',()=>{
        cy.request({         
            method:'DELETE',
            url:'https://reqres.in/api/users/2'
        }).its('status')
        .should('equal',204)
    })

    
})