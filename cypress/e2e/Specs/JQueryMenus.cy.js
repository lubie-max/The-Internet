/// <reference types="Cypress" />


describe("Inputs", function () {

    it("Numarical  input", function () {
      cy.visit(Cypress.env("baseUrl") + "jqueryui/menu");
  
      cy.get('#ui-id-3 > :nth-child(1)').should('be.visible')
      cy.get('#ui-id-3 > :nth-child(1)').trigger('mouseover');
      cy.get('#ui-id-4 > [href="#"]').click({force: true});
      cy.wait(2000)
      cy.get('#ui-id-5 > a').click({force: true});
    //   cy.get('#ui-id-4 > [href="#"]').click()
  
     
    });
  });