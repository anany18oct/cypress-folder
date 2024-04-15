describe('Api Test Suit',()=>{
    it('Get Call ',()=>{
        
        let active; // Declare the variable

        cy.request({
            // Your request details here
            method:'GET',
            url :'https://gorest.co.in/public/v2/users',
            header:{
                authorization:'Bearer cca59a65a4ee2f0f648d25316bd0b0addec14bae9fdf305b672569fa0821f9ff'
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.id).to.eq(6752826);
        
            // Assuming res.body.status contains the value you want to assign to active
            active = res.body.status;
        
            if (active !== undefined) {
                active.should('be.true'); // Adjust the expected value as needed
            } 
            else{
                cy.log('Error: "active" is undefined.');
            }
        });
        
        })
    });