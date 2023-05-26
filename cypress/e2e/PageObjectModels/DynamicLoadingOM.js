class DynamicLoadingOM{


    clickDynamicLoadingLink(number){
        return  cy.get(`[href="/dynamic_loading/${number}"]`).click()
    }

    clickButton(){
        return cy.get('button').click();
    }

    getOutputMessage(){
        return cy.get('#finish > h4');
    }

}

export default DynamicLoadingOM;