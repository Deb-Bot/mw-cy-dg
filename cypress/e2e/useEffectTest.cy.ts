
describe('useEffect tests, sort of', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should persist filter selection after page reload', () => {
    cy.contains('africa').click();
    cy.reload();
    cy.get('*[class^="Home_filterActive"]').should('contain.text', 'africa');
  });

  it('Should not persist filter selection after application data cleared and page reloaded', () => {
    cy.contains('antarctica').click();
    cy.clearLocalStorage();
    cy.reload();
    cy.get('*[class^="Home_filterActive"]').should('contain.text', 'europe');
  });
});