describe('Api test Suit',()=>{
    it('Approach - Hard Coded json Object we created',()=>{

        const request_body={

            email: "eve.holt@reqres.in",
            password: "cityslicka"
            }
        cy.request(

                {

                    method:'Post',
                    url:'https://reqres.in/api/login',
                    body:request_body



                    }




                }




        )    
      




    })










})