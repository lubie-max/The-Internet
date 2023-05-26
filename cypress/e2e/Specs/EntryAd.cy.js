/// <reference types="Cypress" />


import EntryAdOM from "../PageObjectModels/EntryAdOM"

describe('Entry Ad Window', function(){

    const POM = new EntryAdOM()
   
    it('should display Entry Ad window', function(){

        cy.visit(Cypress.env('baseUrl')+"entry_ad")



        POM.expectModalText()

        POM.clickCloseButton()
        POM.checkVisibilityOfModal()



        // recheck

        POM.restartModalProccess()

        POM.expectModalText()
        POM.clickCloseButton()
        POM.checkVisibilityOfModal()
        
    })

   
})