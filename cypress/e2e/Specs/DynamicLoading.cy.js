/// <reference types="Cypress" />

import DynamicLoadingOM from "../PageObjectModels/DynamicLoadingOM"
describe("Dynamic Loading", function(){

    this.beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl')+"dynamic_loading")

    })

    const POM = new DynamicLoadingOM;

    it("working with dynamic loading 1", function(){


        // cy.get('[href="/dynamic_loading/1"]').click();

        POM.getDynamicLoadingLink(1)
        cy.get('button').click();

        cy.get('#finish > h4').then(function(elm){
            cy.wrap(elm).should('be.hidden');

            expect(elm.text()).to.equal('Hello World!')
        })
  

    })

    it("working with dynamic loading 2", function(){


        // cy.get('[href="/dynamic_loading/2"]').click();
        POM.getDynamicLoadingLink(2)
        
        cy.get('button').click();

        cy.wait(2000)

        cy.get('#finish > h4').should('not.be.hidden')

  

    })

   
})