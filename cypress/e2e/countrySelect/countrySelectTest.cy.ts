import { CountrySelect } from '../../support/pages/CountrySelectPage';

const countrySelect = new CountrySelect();
describe('Country Select tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should return not found if invalid country is selected', () => {
    countrySelect.getCountryFilter().select('PRU');
    cy.contains('Country not found').should('be.visible');
  });

  it('Should return country information for a valid country selection', () => {
    cy.contains('asia').click();
    countrySelect.getCountryFilter().select('JP');
    countrySelect.getCountryTitle().should('contain', 'Japan').and('contain', '(日本)');
    cy.contains('Code: JP').should('be.visible');
    cy.contains('Flag: 🇯🇵').should('be.visible');
    cy.contains('Currency: JPY').should('be.visible');
    cy.get('div').should('contain', 'Continent:').and('contain', 'Asia');
    countrySelect.getLanguagesTitle().should('contain', 'Languages');
    cy.contains('Japanese (日本語)').should('be.visible');
  })
  it('Should return user to home screen when home button is clicked', () => {
    cy.visit('country/IE');
    countrySelect.getHomeButton().click();
    cy.url().should('eq', Cypress.config().baseUrl);
  })
});
