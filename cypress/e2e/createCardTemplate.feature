@smokeTest
Feature:Create card template in trello website

    Scenario: Validate that the user Can Create New Template “Card Template”
       Given The user navigate to the board
        When Clicks on Create from template button 
        And  Clicks on Create a new template button in card templates list
        And  Types a card templates title
        And  Clicks on Add button to add card templates
        Then The card templates will be created successfully                                                                      