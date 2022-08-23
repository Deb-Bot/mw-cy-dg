
export class CountrySelect {
    getCountryFilter() {
        return cy.get('select');
    }
    getCountryTitle(){
        return cy.get('h1');
    }

    getLanguagesTitle(){
        return cy.get('h3');
    }

    getHomeButton(){
        return cy.contains('Home');
    }
}