describe('Test Suite',()=>{
    it('Read a file and Write a File in cypress',()=>{
        cy.writeFile("firstFile.txt","Cypress is Javascript Based FrontEnd Testing Tool which is written on Node JS")

        cy.writeFile("firstFile.txt","this tool run test cases within the browser",{flag:"a+"})
    })
})