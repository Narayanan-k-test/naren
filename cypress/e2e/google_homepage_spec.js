describe('Google Homepage', () => {
  it('should load the homepage and verify elements', () => {
    // Navigate to Google homepage
    cy.visit('https://www.google.com');

    // Verify the page title
    cy.title().should('eq', 'Google');

    // Verify that the search input field is visible
    cy.get('input[name="q"]').should('be.visible');
  });
});
