/// <reference types="Cypress" />

import HorizontalOM from "../PageObjectModels/HorizontalSliderOM";

describe("Horizontal Scrolling", function () {

    const POM = new HorizontalOM();
  it("should scroll horizontally", function () {
    cy.visit(Cypress.env("baseUrl") + "horizontal_slider");

    POM.setingRangeSlider();

   

  });
});
