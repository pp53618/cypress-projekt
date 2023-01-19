/// <reference types="cypress" />

describe("E2E - W   Wgrywanie pliku", () => {
    it("wgrywanie pliku do inputa poczta WP", () => { 
        cy.visit("https://files.fm/?source=ads-pl&sourceAd=ads-pl&utm_source=ads-pl&utm_campaign=ads-pl&utm_term=ads-pl&gclid=CjwKCAiAnZCdBhBmEiwA8nDQxYGBHeCb7uxQRKwNwpyaaGDiucUfU3z5tNudM-qp1gL-jUGpEomAxRoCzwAQAvD_BwE")
        //cy.get("#file_select_button").click();
        cy.get("#file_select_button").click().attachFile("../fixtures/cropped-kotek.jpg")//.click({force: true});
        
        cy.get("span.filename").should("contain", "cropped-kotek.jpg")
    })
})