describe('Wearables.com Homepage', () => {
  it('should load the homepage and verify basic elements', () => {
    cy.visit('/');
    cy.get('body').then(<strong>($body)</strong> => { /* consent */ });
    cy.title().should('include', 'Wearables.com');
    // All sections up to Newsletter (condensed for this script)
    cy.contains('a', 'Wearables.com').should('be.visible'); // Header
    cy.contains('footer a', 'About Us').should('be.visible'); // General Footer
    cy.contains('button', 'Previous slide').should('be.visible'); // Hero
    cy.contains('h2', 'Featured').scrollIntoView().should('be.visible'); // Featured
    cy.contains('h2', 'Activity Trackers').scrollIntoView().should('be.visible'); // Activity
    cy.contains('h2', 'Fitness Wearables').scrollIntoView().should('be.visible'); // Fitness
    cy.contains('h2', 'Headphones').scrollIntoView().should('be.visible'); // Headphones
    cy.contains('h2', 'Smart Clothing').scrollIntoView().should('be.visible'); // Smart Clothing
    cy.contains('h2', 'Latest Wearable News').scrollIntoView().should('be.visible'); // News
    cy.contains('h2', 'Smartwatches').scrollIntoView().should('be.visible'); // Smartwatches
    cy.contains('h2', 'Virtual Reality').scrollIntoView().should('be.visible'); // VR
    cy.contains('h2, h3, p, strong', 'Subscribe to our newsletter').first().scrollIntoView().should('be.visible'); // Newsletter

    // Footer "Wearable Brands" Link Tests
    cy.contains('h2, h3, p, strong', 'Wearable Brands').first().scrollIntoView().should('be.visible');
    const brandLinks = [ { name: 'Adidas', href: '/collections/adidas/' }, { name: 'Fitbit', href: '/collections/fitbit/' }, { name: 'Garmin', href: '/collections/garmin/' }, { name: 'Samsung', href: '/collections/samsung/' } ];
    brandLinks.forEach(brand => { cy.get('footer').contains('a', brand.name).should('be.visible').and('have.attr', 'href', brand.href); });

    // Footer "Information Links" Tests
    cy.contains('h2, h3, p, strong', 'Information').first().scrollIntoView().should('be.visible');
    const infoLinks = [ { text: 'Submit Product or Company', href: '/pages/submit-a-product-or-company' }, { text: 'Research & Media', href: '/pages/research-media' }, { text: 'Advertising', href: '/pages/advertising' } ];
    infoLinks.forEach(link => { cy.get('footer').contains('a', link.text).should('be.visible').and('have.attr', 'href', link.href); });

    // Footer "Follow Us" Social Media Link Tests
    cy.contains('h2, h3, p, strong', 'Follow us').first().scrollIntoView().should('be.visible');
    const socialLinks = [ { name: 'Facebook', href: 'https://www.facebook.com/wearablesdotcom', hrefPartial: 'facebook.com' }, { name: 'Twitter', href: 'https://twitter.com/wearablesdotcom', hrefPartial: 'twitter.com' }, { name: 'YouTube', href: 'https://www.youtube.com/channel/UCcFaBDH_z8mvuC284KFSBZw', hrefPartial: 'youtube.com' } ];
    socialLinks.forEach(link => { cy.get('footer').contains(`a[href*="${link.hrefPartial}"]`, link.name).should('be.visible').and('have.attr', 'href', link.href); });
  });
});
