@smokeTest
Feature: Update name of a template in trello website

    Scenario: Validate that the user can update name of a template
        Given The user navigate to the board
        When  Clicks on a card template 
        And   Clicks on card title and Types new card template name in card title input field
        Then  The card template name will be updated successfully