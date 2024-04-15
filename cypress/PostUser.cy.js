describe('MyTest Suite', () => {
    it('Post Call', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer cc34bf44ab7ccec466ec7afa9d325f72b964f0ac03c67cdda5b4ce3661db2316',
            },
            body: {
                name: 'A',
                email: 'Apoornima@gmail.com',
                gender: 'female',
                status: 'active'
            }
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.email).to.eq("Apoornima@gmail.com")
            expect(res.body.name).to.eq("A")
            // Additional assertions can be added if needed
        });
    });
});
