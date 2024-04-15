describe("Alert demo",function(){
    it('Click for JS Alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(str)=>{
            expect(str).to.eq('I am a JS Alert')
        })
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq('I am a JS Confirm')
        })

        cy.on('window:confirm',(str)=>{
            return false;
        })
        cy.get("button[onclick='jsConfirm()']").click()
        cy.get('#result').should('have.text','You clicked: Cancel')

    })
})