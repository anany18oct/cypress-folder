/// <reference types="cypress" />
describe('How to Handle Alerts',function(){

    it.skip('Checking JavaScript Alerts',function(){
        //javascript alert
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        // cy.screenshot('Window alert')
        //alert window is automatically close by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
        })
    ////javascript confirm Alert:It will have some text with 'ok' and 'cancel' button
    it.only('checking confirmation JS Alert by ok ',function(){

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok')
})
    it('checking confirmation JS Alert by cancel ',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm',()=>false)//cypress closes alert by using cancel button
        cy.get('#result').should('have.text','You clicked: Ok')

    })
})