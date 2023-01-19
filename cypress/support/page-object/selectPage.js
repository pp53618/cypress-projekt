class SelectPage {
    get select() {
        return cy.get('[class="_0ofwUT KVKCn3 DpImHu n-pMx8 cXrhYr reVeb9 _0xLoFW _78xIQ- LyRfpJ zvYeCP"]')
    }

    selectAllOption() {
    this.select.then(select => {
            cy.wrap(select).find("label").each(opcja =>{
                cy.wrap(select).select(opcja.text())
            })
        })    
    }
}

export default new SelectPage();