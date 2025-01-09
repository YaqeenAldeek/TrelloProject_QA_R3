@RegressionTest
Feature: Move Template To Any List in trello website

    Scenario: Validate that the user can Move Template To Any List
        Given The user navigate to the board
        When  Clicks on a card template 
        And   Clicks on move button  from Actions list button
        And   Clicks on drop-down List
        And   Clicks on second option 
        And   Clicks on Move button 
        Then  The card template will move successfully