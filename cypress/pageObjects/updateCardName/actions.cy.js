
class updateCardTemplateNameActions {
   

    clickOnAnCardTitle(UpdatedCardTitle){
        cy.findByTestId("card-back-title-input").first().click({ multiple: true }).clear().type(UpdatedCardTitle)
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
    
    clickOnCloseNewCardTemplateIcon(){
        cy.findByTestId("CloseIcon").first().click()
        return this ;

    }
}
export default updateCardTemplateNameActions;

