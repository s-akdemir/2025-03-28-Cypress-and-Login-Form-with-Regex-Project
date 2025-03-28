describe("Login test pages", () => {
  beforeEach(() => {
          cy.visit('http://localhost:5173/');
      });  
  it('should show error message for wrong email entry', () => {
    cy.get('input[name="email"]').type("selman");
    cy.get('input[name="password"]').type("1234567Abc");
      cy.get('button[color="primary"]').should('be.disabled');
      cy.contains('Please enter a valid email address').should('be.visible');
  });
  it('should show error message for short password and wrong email', () => {
    cy.get('input[name="email"]').type("selman");
    cy.get('input[name="password"]').type("123");
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.contains('Password must be at least 4 characters long').should('be.visible');
  });
  it('should disable button if terms not checked', () => {
      cy.get('input[name="terms"]').should('not.be.checked');
      cy.get('button[color="primary"]').should('be.disabled');
  });
  });
  