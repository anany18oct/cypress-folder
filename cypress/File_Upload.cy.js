describe('Handling of file Upload',function(){
    it('Upload a Single File',function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('classic.db');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it('Upload a file - Rename',function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'classic.db',fileName:'mydemoclass.db'});
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it('Upload a file - Drag n Drop',function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('welcome to Cypress.jpg',{subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get("div[class='dz-preview dz-processing dz-image-preview dz-success dz-complete'] div[class='dz-details'] span").contains('welcome to Cypress.jpg');

    })
    it.only('Upload Multiple files',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(["classic.db","welcome to Cypress.jpg"]);
        cy.get(':nth-child(6) > strong').contains("Files You Selected:");
    })
    it('handle Shadow Dom',function(){
        cy.visit('https://selectorshub.com/shadow-dom-in-iframe/')
        cy.get('snacktime')
    })

})