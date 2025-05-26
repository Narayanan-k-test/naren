describe('Google Homepage', () => {
  it('should load the homepage and verify elements', () => {
    cy.visit('https://www.google.com');

    // Attempt to find and click a consent button.
    cy.get('body').then(() => {
      const consentButtonTexts = ['Accept all', 'I agree', 'Alle akzeptieren'];
      let clicked = false;
      for (const text of consentButtonTexts) {
        if (.find(`button:contains("${text}")`).length > 0) {
          cy.contains('button', text).click({ force: true });
          clicked = true;
          break;
        }
      }
      if (clicked) {
        cy.log('Consent button clicked.');
      } else {
        cy.log('Consent button not found or not clicked.');
      }
    });

    cy.title().should('eq', 'Google');
    cy.get('input[name="q"]', { timeout: 10000 }).should('be.visible');
  });
});
