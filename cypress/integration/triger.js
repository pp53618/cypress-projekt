/// <reference types="cypress" />

describe("E2E - Skrolowanie / Najechanie", () => {
    it("Najechanie na dany element", () => { 
        cy.visit("/")
        //cy.get('[role="presentation"][aria-label="Odzież"]').trigger("focus")
        //cy.get('[class="_0Qm8W1 u-6V88 FxZV-M pVrzNP"]').eq(1).trigger("focus")
        //cy.contains("Odzież")
        //cy.get('span[class="_0Qm8W1 u-6V88 FxZV-M pVrzNP"]').eq(1).trigger("focus")
        //z-navicat-header_categoryOverlayContainer z-navicat-header_categoryOverlayContainer-open
        cy.get(".z-navicat-header_categoryListElement").eq(1).trigger("focus")
        cy.get('div.A-NCMf a[href="/odziez-damska-sukienki/"]').click();
    })
    it
})