

class FileUploadOM{

    uploadAFile(fileName, filePath){

        return  cy.fixture(filePath).then((fileContent) => {
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
    }

    submitTheFile(){
        return  cy.get("#file-submit").click();

    }

    varifyTheFile(fileName){
    return cy.get("#uploaded-files").contains(fileName)

    }
}

export default FileUploadOM