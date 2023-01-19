/// <reference types="cypress" />

describe("E2E - Skrolowanie / Najechanie", () => {
    it("Najechanie na dany element - Smyk", () => { 
        cy.visit("https://www.smyk.com/?gclid=CjwKCAiAzKqdBhAnEiwAePEjkvzlCSGBJAZBN3vpTrPVwVH2r-HQBhxyGIgMx4tpwnhLkRXKC0V2ZxoC6wEQAvD_BwE&gclsrc=aw.ds")
        cy.get(".text__title").eq(1).click().trigger("focus")
        cy.get('ul.sublist__menu-list div[title="Ubrania"]').click();
    })

    it("Skrolowanie do boxa Kategorie", () => {
        cy.get('div[title="<span font-size: 17px;>KATEGORIE</span>"]').scrollIntoView();
    })
})
