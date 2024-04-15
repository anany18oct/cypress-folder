import Login from "../Page Object Model/LoginPage2.js";
/// <reference types="cypress" />

it('Login Test ',function(){

    cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=AB7EA963DA60D42C74F7F8F72F33E197')

    cy.fixture('parabank.json').then((data)=>{

    const ln=new Login();//object creation of login page  where ln is object reference variable in JS.
    ln.setUserName(data.username);
    ln.setInputPassword(data.password);
    ln.clickLogin();
    ln.verifyLogin();



    })
    
    
})
