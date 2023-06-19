/// <reference types="Cypress" />

describe("File Upload", () => {
  it("should upload a file to the server", () => {
    cy.visit(Cypress.env("baseUrl") + "upload");

    // const filePath ="cypress\downloads\arcanys logo.png"

    const fileName = "arcanys logo.png";
    const filePath = "/arcanys logo.png";

    cy.fixture(filePath).then((fileContent) => {
      cy.get("#file-upload").then((input) => {
        cy.window().then((win) => {
          const file = new win.File([fileContent], fileName, {
            type: "image/png",
          });
          const dataTransfer = new win.DataTransfer();

          dataTransfer.items.add(file);
          input[0].files = dataTransfer.files;
          input.trigger("change", { force: true });
        });
      });
    });

    cy.get("#file-submit").click();

    cy.get("#uploaded-files").contains(fileName)
  });
});
