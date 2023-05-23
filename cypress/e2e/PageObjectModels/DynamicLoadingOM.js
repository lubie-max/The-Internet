class DynamicLoadingOM{


    getDynamicLoadingLink(number){
        return  cy.get(`[href="/dynamic_loading/${number}"]`).click()
    }

}

export default DynamicLoadingOM;