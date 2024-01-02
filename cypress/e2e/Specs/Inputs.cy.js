/// <reference types="Cypress" />
import 'cypress-xpath';  // Implementation of xpath



describe("Inputs", function () {

  it("Numarical  input", function () {
    cy.visit(Cypress.env("baseUrl") + "inputs");

    cy.get('input').should('have.attr',"type").then((type) => {
        expect(type).to.equal("number");
    })

    cy.get('input').type(12)
    cy.log('before clicking')
    cy.get(`input[type='number']`).click()

    // cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]').click()
    cy.xpath('//input[@type="number"]').invoke('val',198989)
   
  });
});
