/// <reference types="cypress" />

describe("E2E - Lesson", () => {
    it("Lokalizatorach", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Identyfikator
        // cy.get("#placeholder")

        //Po klasie
        cy.get(".z-navicat-header_searchInput-searchContextButton")

        //Po atrybutach
        cy.get('[name="q"]')
        cy.get('[placeholder="Szukaj"]')

        //Dokładniejszy atrybut wraz z podaniem znacznika
        cy.get('input[placeholder="Szukaj"]')

        //Pobiearnie elementów po kilku atrybutach
        cy.get('[src="https://img01.ztat.net/cnt/contentful-apps/uploads/d3b21351-edb7-405a-b683-8a1991b7b8e5.jpeg?imwidth=750"][draggable="false"]')

        //Zalecana praktyka pobierania elementów
        cy.get('[data-cy="wyszukiwarka"]')
    })

    it.only("Lokalizatory część 2", () => {
        cy.visit("/")
        cy.contains("Zapisz mnie")
        // cy.contains('[type="submit"]', 'submit')

        cy.get("li").parents("#z-navicat-header-root").find("li").eq(0)
        cy.get("li").parents("#z-navicat-header-root").find("li").contains("Kobiety")
    })

})