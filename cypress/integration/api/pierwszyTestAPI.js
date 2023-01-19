/// <reference types="cypress" />

describe("E2E - Testy API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })

    it("Werefikacja tagów API", () => { 
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations")
        })
    })

    it("Niepoprawne logowanie", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test1234@test.pl", "12345@")
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            // cy.fixture("example").then(data => {
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
            // })
            
        })
    })

    it("Poprawne logowanie", function () {
        cy.intercept("GET", "https://api.realworld.io/api/tags", {fixture: 'tags.json'}).as("requestTag");
        cy.login("bartek-mackiewicz@test.pl", "bartekmackiewicz@")
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.body.tags).to.contain("cats").and.to.contain("test")
    })
})
})