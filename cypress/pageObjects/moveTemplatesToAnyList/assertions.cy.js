class moveTemplatesToAnyListAssertions{

    checkCardMovedToDoingList(DoingOptionList){

        cy.findByTestId("list-name").contains(DoingOptionList).should("have.text",DoingOptionList)
    }

}
export default moveTemplatesToAnyListAssertions ;