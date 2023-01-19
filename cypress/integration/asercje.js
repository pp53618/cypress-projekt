/// <reference types="cypress" />

describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => { 
        cy.visit("/")
        

        //Weryfikacja tekstu
        cy.get('a[title="Lista życzeń"]').should("contain", "Lista życzeń")
        cy.get('a[title="Lista życzeń"]').then(zakladka => {
            expect(zakladka).to.contain("Lista życzeń")

        //Sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Lista życzeń"]').should("not.contain", "adffg")
        cy.get('a[title="Lista życzeń"]').then(zakladka => {
            expect(zakladka).not.to.contain("asadaf us")
        }) 

        })

        //Weryfikacja czy znacznik posiada znacznik
        cy.get('input[accesskey="F"]').should("have.class", "z-navicat-header_searchInput-searchContextButton")
        cy.get('input[accesskey="F"]').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("z-navicat-header_searchInput-searchContextButton")
        })

        //Czy element jest widoczny
        cy.get('input[accesskey="F"]').should("be.visible");
        //cy.get('input[accesskey="F"]').should("not.be.visible");
    
        cy.get('input[accesskey="F"]').then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })

        //Werefikacja ilości pobranych elementów
        cy.get("ul.z-navicat-header_categoryPanelGrid").find("li").should("have.length", 9)
        cy.get("ul.z-navicat-header_categoryPanelGrid").find("li").then(zakladki => {
            expect(zakladki).to.have.length(9)
        })

        //Werefikacja wartość css danego elementu
        cy.get('input[accesskey="F"]').should("have.css", "font-size", "16px")
        cy.get('input[accesskey="F"]').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css("font-size", "16px")
        })
    })
})