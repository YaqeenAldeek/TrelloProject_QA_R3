class createCardTemplateAssertions {

    checkThePopPageForCardTemplateAppeare(){
        cy.findByTestId("template-card-back-banner").should("contain","This is a Template card.")
    }
    checkListIsContainCardTemplate(cardTemplateName){
        cy.findByTestId("card-name").should("contain",cardTemplateName)
        cy.findByTestId("badge-card-template").should("be.visible").and("contain","This card is a template.")
        return this;
    }
}
export default createCardTemplateAssertions;