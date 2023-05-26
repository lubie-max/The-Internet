

class EntryAdOM {

    expectModalText(){
       return cy.get('.modal').should('be.hidden').should('include.text', "modal window")
    }

    clickCloseButton(){
        return cy.get('.modal-footer > p').click()

    }

    checkVisibilityOfModal(){
        return cy.get('.modal').should('not.be.visible')
    }

    restartModalProccess(){
       return cy.get('#restart-ad').click()
    }


}

export default EntryAdOM;