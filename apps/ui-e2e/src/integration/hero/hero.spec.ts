describe('ui: Hero component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hero--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Hero!');
    });
});
