describe("Login test pages", () => {
  beforeEach(() => {
          cy.visit('http://localhost:5173/');
      });  
  it('should show error message for wrong email entry', () => {
      cy.get('input[type="email"]').type("selman");
      cy.get('input[type="password"]').type("1234567Abc");
      cy.get('button[color="primary"]').should('be.disabled');
      cy.contains('Please enter a valid email address').should('be.visible');
  });
  it('should show error message for short password and wrong email', () => {
    cy.get('input[type="email"]').type("selman");
    cy.get('input[type="password"]').type("123");
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.contains('Password must be at least 4 characters long').should('be.visible');
  });
  it('should show error message for long password', () => {
      cy.get('[data-cy="input-password"]').type("12348749837984739874938749837498739487398473984");
      cy.contains('Şifreniz 12 karakterden uzun olmamalı!').should('be.visible');
  });
  });
  