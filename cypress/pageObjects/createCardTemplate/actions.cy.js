
class createCardTemplateActions {
   

    clickOnAddACardTemplateButton(){
        cy.findByTestId("card-template-list-button").first().click({ multiple: true })
        return this;
    }

    clickOnCreateANewTemplateButton(){
        cy.findByTestId("create-new-template-card-button").click({ multiple: true })
        return this;
    }

    TypeACardTemplateTitle(cardTemplateName){
        cy.findByTestId("create-template-card-composer").type(cardTemplateName)
        return this;
    }
    
    clickOnAddNewCardTemplate(){
        cy.findByTestId("new-template-card-submit-button").click({ multiple: true })
        return this ;
    }
    
   
}
export default createCardTemplateActions;

