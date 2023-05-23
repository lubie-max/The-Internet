

class DynamicControlsOM{

    clickAddRemoveButton(){
        return cy.get('#checkbox-example > button').click()
    };

    getMessageBox(){
        return  cy.get('#message')
    };

    clickDisableEnebleButton(){

        return  cy.get('#input-example > button').click()
    };

    getInputField(){
        return  cy.get('#input-example > input')
    };


}


export default DynamicControlsOM;