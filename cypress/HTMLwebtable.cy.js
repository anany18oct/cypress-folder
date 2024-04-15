

describe('Html Web Table',function(){
    it('Inspect the HTML table',function(){
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#HTML1 > div.widget-content > table');

        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)')
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(3)').contains('td','Selenium');
        cy.get('#HTML1 > div.widget-content > table>tbody>tr:nth-child(4)>td:nth-child(2)').contains('Animesh');
    })

    it.skip('Inspect the  no of rows and no of columns in  HTML table',function(){
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#HTML1 > div.widget-content > table');
        cy.get("#HTML1 > div.widget-content > table>tbody>tr").should('have.length','7')
        cy.get("#HTML1 > div.widget-content > table>tbody>tr>th").should('have.length','4')

    })
    it.only('Inspect the  no of rows and no of columns data in the first Page table',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("#HTML1 > div.widget-content > table>tbody>tr").each( ($row,index,$rows)=>{
            cy.get('td').each( ($col,index,$cols)=>{
                cy.log($col.text());
            })
        })

        

    })

})