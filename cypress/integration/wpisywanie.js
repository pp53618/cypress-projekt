/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartości w pole", () => { 
        cy.visit("/")
        cy.searchPhrase("Przykładowy produkt{backspace}", 1200);
        //cy.get(".z-navicat-header_searchInput-searchContextButton").type("Przykładowy produkt{backspace} {enter}", {delay: 500})
    })
    it("Czyszczenie wartości z pola input", () =>{
        cy.clearSearchPhrase();
        //cy.get(".z-navicat-header_searchInput-searchContextButton").clear();
    })
})