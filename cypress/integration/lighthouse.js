describe("LightHouse", () => {
    it("Pierwszy Test LightHouse", () => {
        cy.visit("http://testowanie-oprogramowania.pl")
        cy.lighthouse({
            performance: 85,
            accessibility: 100,
            "best-practices": 85,
            seo: 85,
            pwa: 100,
        });
    })
})