/// <reference types="cypress" />

describe("E2E - Metoda Jnvoke", () => {
    it("Invoke", () => { 
        cy.visit("/")

        //Pobieranie wartości z danego elementu
        cy.get('[title="Lista życzeń"]').invoke("text").then(tekst => {
            cy.log(tekst)
        })
        
        //Uzyskanie dostępu do wartości atrybutu
        cy.get('[title="Lista życzeń"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })
        cy.get('[title="Lista życzeń"]').invoke("attr", "title").then(title => {
            cy.log(title)
        })
        //Pobieranie wartości value
        cy.get(".z-navicat-header_searchInput-searchContextButton").type("Przykładowa wartość").invoke("prop", "checked").then(wartosc => {
            cy.log(wartosc)
        })
        })
})


