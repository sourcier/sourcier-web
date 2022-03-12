describe('ui: Hero component', () => {
  beforeEach(() => cy.visit('/iframe.html?path=/story/introduction--page'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui-components');
  });
});
