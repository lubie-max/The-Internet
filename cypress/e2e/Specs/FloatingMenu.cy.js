/// <reference types="Cypress" />

import FloatingMenuOM from "../PageObjectModels/FloatingMenuOM";

describe("Floating Menu", () => {
  const POM = new FloatingMenuOM();

  it("should upload a file to the server", () => {
    cy.visit(Cypress.env("baseUrl") + "floating_menu");

    POM.getMenuList().each((elm, i, list) => {
      const text = elm.text();

      POM.getMenuList().eq(i).click();

      POM.checkIfFloatingMenuWorks(text);
    });
  });
});
