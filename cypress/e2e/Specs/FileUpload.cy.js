/// <reference types="Cypress" />

import FileUploadOM from "../PageObjectModels/FileUploadOM";

describe("File Upload", () => {

  const POM = new FileUploadOM

  it("should upload a file to the server", () => {
    cy.visit(Cypress.env("baseUrl") + "upload");

    // const filePath ="cypress\downloads\arcanys logo.png"

    const fileName = "arcanys logo.png";
    const filePath = "/arcanys logo.png";


    POM.uploadAFile(fileName, filePath)

    // cy.get("#file-submit").click();

    POM.submitTheFile()


    // cy.get("#uploaded-files").contains(fileName)
    POM.varifyTheFile(fileName)
  });
});
