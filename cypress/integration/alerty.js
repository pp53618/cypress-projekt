/// <reference types="cypress" />

import AlertPage from "../support/page-object/alertPage";

describe("E2E - Alerty", () => {
    it("alerty", () => { 
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        AlertPage.clickOnBtnAlert1();
        //cy.get("#alert").click();
        AlertPage.verifyAlertText("TestowaTestowa");
        // cy.on("window:alert", tresc => {
        //     expect(tresc).to.equal("Przykładowa treść alertu")
        //})
    })
    it("Alert confirm", () => {
        AlertPage.clickOnBtnAlert2();
        // cy.get("#alert-confirm").click();
        AlertPage.verifyAlertConfirmText();
        // cy.on("window:confirm", tresc =>{
        //     expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        // })
        AlertPage.acceptAlert();
        //cy.on("window:confirm", () => false)
    })
})