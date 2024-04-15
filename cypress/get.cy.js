describe('Test Suit',()=>{
    it('Get User by Id',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/6752838',
            header:{
                "Authorization":"Bearer cca59a65a4ee2f0f648d25316bd0b0addec14bae9fdf305b672569fa0821f9ff"
            }
        }).then((res)=>{
            expect(res.body.name).to.eq('Swara Saini');
            expect(res.body.email).to.eq('saini_swara@conroy.example');
            expect(res.body.id).to.eq(6752838);
            // expect(res.body.name).to.eq('Swara Saini');
            // expect(res.body.name).to.eq('Swara Saini');
        })
    })
})