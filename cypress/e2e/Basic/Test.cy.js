describe('Test', () => {
  it('open ulr', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.title().should('eq', 'Swag Labs');
    cy.get('[data-test="username"]')
    
  });
});
