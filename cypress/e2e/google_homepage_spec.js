describe('Google Homepage', () => {
  it('should load the homepage and verify elements', () => {
    cy.visit('https://www.google.com');
    cy.title().should('eq', 'Google');
    cy.get('input[name="q"]').should('be.visible');
  });
});
