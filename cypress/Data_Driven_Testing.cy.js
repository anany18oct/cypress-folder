describe('Test Suite',()=>{
    it('Data Driven Test',()=>{

        cy.fixture('OrangeHRM2.json').then((data)=>{
            data.forEach(userdata => {
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                cy.get("input[placeholder='username']").type(userdata.username);
                cy.get("input[placeholder='password']").type(userdata.password);
                cy.get("button[type='submit']").click();

            if(userdata.username=="Admin" && userdata.password=="admin123")
                {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected);
                    cy.get(".oxd-userdropdown-tab > .oxd-icon").click()
                    cy.get(":nth-child(4) > .oxd-userdropdown-link").click()

                    Cypress.on('uncaught:exception', (err, runnable) => {
                        // returning false here prevents Cypress from failing the test
                        return false;
                      });
                    
                }
                
            else
                {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected);
                }
                
            });

        })
    })
})