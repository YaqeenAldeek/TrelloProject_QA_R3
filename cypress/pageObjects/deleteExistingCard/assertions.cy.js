class deleteCardAssertions {
    
    checkListIsNotContainCard(cardName){
        cy.findByTestId("card-name").should("not.exist")
        return this;
    }
}
export default deleteCardAssertions;