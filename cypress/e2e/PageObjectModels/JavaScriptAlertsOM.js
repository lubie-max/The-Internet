
class  JavaScriptAlertsOM{

    readAlertText(){
        return    cy.on('window:alert', (alertText)=>{   
            expect(alertText).to.equal('I am a JS Alert')
          })
    
    }

    writePromptVal(txt){

        return cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(txt);
          });
    }


}

export default JavaScriptAlertsOM ;