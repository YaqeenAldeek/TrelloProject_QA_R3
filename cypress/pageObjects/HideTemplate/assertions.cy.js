class hideTemplateAssertions{

    checkListIsNotContainCard(cardTemplateName){
        cy.findByTestId("card-name").should("not.exist")
        return this;
    }

}

export default hideTemplateAssertions ;