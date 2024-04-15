describe('Test Suite',()=>{
    it.skip('Handling Prev() function',()=>{
        cy.visit('https://www.w3schools.com/html/html_lists.asp');
        cy.get(':nth-child(12) > h3');
        cy.get('#main > div:nth-child(12) > div > span:nth-child(1)').prev()
    })
    it('Trigger Function',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get("label[for='radio1']").trigger("mouseover")
        
    })
})