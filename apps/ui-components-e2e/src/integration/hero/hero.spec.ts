describe('ui: Hero component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hero--primary'));

  it('should render the component', () => {
    cy.get('[data-testid="hero-heading"]').should(
      'contain',
      'Anim aute id magna'
    );
  });
});
