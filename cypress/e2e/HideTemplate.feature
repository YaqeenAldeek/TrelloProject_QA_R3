@RegressionTest
Feature: Hide Existing Card from list in trello website

    Scenario: Validate that the user can hide existing template card from list
        Given The user navigate to the board
        When Clicks on an existing template
        And  Clicks on Hide from list button on actions list
        Then The card will be hidden from list successfully