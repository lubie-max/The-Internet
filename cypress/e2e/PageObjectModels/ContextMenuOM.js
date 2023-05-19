class ContextMenuOM{


    GetContextMenu(){
        return cy.get('#hot-spot').rightclick()
        
    }
    CheckForAlert(){
        return  cy.on('window:alert',(str)=>{
            expect(str).to.include('You selected a context menu');
        })
    }
}


export default ContextMenuOM;