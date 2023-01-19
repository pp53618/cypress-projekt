/// <reference types="cypress" />

describe("E2E - Akcje kliknięcia", () => {
    it("kliknięcie na element", () => { 
        cy.visit("/")
        cy.get(".z-navicat-header_navToolItem-wishlist").click();
        cy.get('[class="b69iQl _5Yd-hZ"]').eq(0).click({force: true});
        //cy.get('[aria-hidden="true"]').eq(1).click();
    })
})