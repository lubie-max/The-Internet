/// <reference types="Cypress" />

import HoverOM from "../PageObjectModels/HoverOM";
describe("Hover", function () {
  const POM = new HoverOM();
  it("should Hover accordingly", function () {
    cy.visit(Cypress.env("baseUrl") + "hovers");

    POM.figureDOMElm().each(function ($element, index, $list) {
      // cy.log($element)

      POM.figureDOMElm().eq(index).trigger("mouseenter");
      cy.get(".figcaption > h5").eq(index).should("not.be.visible");
      POM.figureDOMElm().eq(index).trigger("mouseleave");
    });
  });
});
