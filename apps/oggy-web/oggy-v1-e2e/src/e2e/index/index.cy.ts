describe('oggy-web-oggy-v1: FilterList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=filterlist--primary&args=Data;Filter;SelectFilterHandler;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FilterList!');
    });
});
