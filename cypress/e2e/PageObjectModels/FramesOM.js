

class FramesOM{

    checkIfValid(){
       return cy.get('body').should('be.ok')
       
    }


}

export default FramesOM;