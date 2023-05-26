/// <reference types="Cypress" />

import DynamicLoadingOM from "../PageObjectModels/DynamicLoadingOM"
describe("Dynamic Loading", function(){

    this.beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl')+"dynamic_loading")

    })

    const POM = new DynamicLoadingOM;

    it("working with dynamic loading 1", function(){


        // cy.get('[href="/dynamic_loading/1"]').click();

        POM.clickDynamicLoadingLink(1)
        POM.clickButton()

        POM.getOutputMessage().then(function(elm){
            cy.wrap(elm).should('be.hidden');

            expect(elm.text()).to.equal('Hello World!')
        })
  

    })

    it("working with dynamic loading 2", function(){


        // cy.get('[href="/dynamic_loading/2"]').click();
        POM.clickDynamicLoadingLink(2)

        POM.clickButton()

        cy.wait(2000)

        POM.getOutputMessage().should('not.be.hidden')

  

    })

   
})