/// <reference types="cypress" />

import selectPage from "../support/page-object/selectPage";

describe("E2E - Akcja wybrania opcji selekt", () => {
    it("Wybieranie opcji", () => { 
        cy.visit("/akcesoria-torby-kobiety/")

        //Po nazwie
        cy.get('[aria-label="filtruj po Rozmiar"]').click();
        cy.get('[for="sizes-S"]').click();

        //Po indeksach - ale nie ma selectora i nie działa
        //cy.get("._0ofwUT KVKCn3 DpImHu n-pMx8 cXrhYr reVeb9 _0xLoFW _78xIQ- LyRfpJ zvYeCP").select(2);

    })

    it.only("Wybieranie wszystkich opcji", () => {
        cy.visit("/akcesoria-torby-kobiety/")

        cy.get('[aria-label="filtruj po Rozmiar"]').click();
        selectPage.selectAllOption();

        
        // cy.get('[class="_0ofwUT KVKCn3 DpImHu n-pMx8 cXrhYr reVeb9 _0xLoFW _78xIQ- LyRfpJ zvYeCP"]').then(select => {
        //     cy.wrap(select).find("label").each(opcja =>{
        //         cy.wrap(select).select(opcja.text())
        //     })
        //cy.get('[aria-label="filtruj po Rozmiar"]').invoke("attr", "role").then(role =>{
       //     cy.log(role)
        })
        })
    //})
