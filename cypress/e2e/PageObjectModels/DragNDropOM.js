

class DragNDrop{

    checkingValidBox(){
    return  cy.get('#columns > :nth-child(1) > header ').should('have.text',"A")
    
    };

    getColumnA(){
        return cy.get("#column-a")
    }

    getColumnB(){
        return cy.get("#column-b")
    }
}


export default DragNDrop