describe('oggy-web-oggy-v1: Switch component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switch--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Switch!');
    });
});
