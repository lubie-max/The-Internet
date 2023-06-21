/// <reference types="Cypress" />

import FormAuthenticationOM from "../PageObjectModels/FormAuthentication";

describe("Floating Menu", () => {
  const POM = new FormAuthenticationOM();

  it("Authentication", () => {
    cy.visit(Cypress.env("baseUrl") + "login");

    cy.fixture("loginData.json").then((data) => {

      // using fixture for data consistency.
      const fixtureData = data;
      // cy.log(fixtureData);

      const username = fixtureData.username;
      const password = fixtureData.password;

      // cy.log(username, password);

      expect(username).to.equal("tomsmith");
      expect(password).to.equal("SuperSecretPassword!");

      POM.typeUsername(username);
      POM.typePassword(password);

      POM.clickLoginButton();

      POM.checkIfLoggedIn();

      // checking if server responds with right parameters
      cy.request({
        url: "https://the-internet.herokuapp.com/authenticate",
        method: "POST",
        body: { username, password },
      }).then((response) => {
        cy.log("response", response.status, response.statusText);

        expect(response.status).to.equal(200);
      });
    });
  });
});
