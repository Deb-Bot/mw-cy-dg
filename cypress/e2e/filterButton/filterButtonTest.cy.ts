import { FilterButton } from '../../support/pages/FilterButtonPage';

const filterButton = new FilterButton();

let continents = ['europe', 'africa', 'asia', 'oceania', 'antarctica', 'mu'];

describe('Filter Button tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should check count and text for all filters', () => {
    filterButton
      .getFilterButton()
      .its('length')
      .then(($len) => {
        const buttonCount = $len;
        expect(buttonCount).to.eq(continents.length);
        for (let i = 0; i < continents.length; i++) {
          const continentName = continents[i];
          filterButton.getFilterButton().eq(i).should('contain', continentName);
        }
      });
  });
});
