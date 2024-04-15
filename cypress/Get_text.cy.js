describe('Example Cypress Test', () => {
    it('should get text content', () => {
      cy.visit('https://codenboxautomationlab.com/practice/');
      
      cy.get('.page-title').invoke('text').then((text1) => {
        // Compare the variable text1 to the expected value
        expect(text1).to.eq('Automation Practice');
      });
    });
  });
  