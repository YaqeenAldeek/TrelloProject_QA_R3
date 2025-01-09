@smokeTest
Feature: Delete Existing Card in trello website

    Scenario: Validate that the user can delete existing card
        Given The user navigate to the board
        When Clicks on an existing card
        And  Clicks on archive button on actions list
        And  Clicks on Delete button
        Then The card will be deleted successfully