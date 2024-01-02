/// <reference types="Cypress" />
import 'cypress-xpath';  // Implementation of xpath

import JavaScriptAlertsOM from '../PageObjectModels/JavaScriptAlertsOM';



describe("Alarts", function (){

    const POM = new JavaScriptAlertsOM();

    it("should deal with alerts", function(){

        // cy.visit(Cypress.env("baseURL") + 'javascript_alerts')
        cy.visit(Cypress.env("baseUrl") + "javascript_alerts");

//Alerts 

//1st approach 


    POM.readAlertText();
      
      cy.get(':nth-child(1) > button').click()

// second approach

        cy.get(':nth-child(1) > button').click().then((res)=>{

            cy.log(res);
            cy.get('#result').should('exist');
        })



        cy.wait(2000);

// window.alert
//  POM.readAlertText()




// Input prompt 
       
        let val = '22121212';
          POM.writePromptVal(val)
          cy.get(':nth-child(3) > button').click()
          cy.get('#result').should('contain', val);


    })


})