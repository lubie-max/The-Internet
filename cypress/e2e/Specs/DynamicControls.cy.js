/// <reference types="Cypress" />

import DynamicControlsOM from "../PageObjectModels/DynamicControlsOM";

describe("Dynamic Content", ()=>{

    const POM = new DynamicControlsOM;
    it("Dynmic content", ()=>{

        cy.visit(Cypress.env('baseUrl')+"dynamic_controls");

        // Removing
        // cy.get('#checkbox-example > button').click()
        POM.clickAddRemoveButton();

        POM.getMessageBox().then((elm)=>{
              

               expect(elm.text()).to.equal("It's gone!")

        })


        // Adding 
        // cy.get('#checkbox-example > button').click()
        POM.clickAddRemoveButton();


        POM.getMessageBox().then((elm)=>{
              
            expect(elm.text()).to.equal("It's back!")

         })


         // Disible Content

        //  cy.get('#input-example > button').click()
        POM.clickDisableEnebleButton()

         POM.getMessageBox().then((elm)=>{

            expect(elm.text()).to.equal("It's enabled!")
         })


         POM.getInputField().type("Hi there!")

         POM.clickDisableEnebleButton()

         POM.getMessageBox().then((elm)=>{

            expect(elm.text()).to.equal("It's disabled!")

         });

         POM.getInputField().should('be.disabled')

    }
    
    )
})