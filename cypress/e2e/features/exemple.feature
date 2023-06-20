
Feature: Login with Valid and Invalid Data

    Background:
        Given I navigate to the Website

    @SmokeTest
    Scenario: Login as a new sign-up user with valid data (ORHT-1234, ORHT-1567)
        When I enter a valid credential
            | email             | validpassword |
            | test1@yopmail.com | test123       |
        When the user clicks on the sign-in button
        Then the title should be validated after login

    @SanityTest
    Scenario: Login with invalid data by entering an invalid password (ORHT-569, ORHT-281)
        When I enter an invalid credential
            | email             | invalidpassword |
            | test2@yopmail.com | test123         |
        When the user clicks on the sign-in button
        Then the error message should be displayed
            | errormessage          |
            | Authentication failed |


    Scenario: Verify login
        Given the user navigates to the Website
        When the user enters their credentials
        And the user clicks on the sign-in button
        Then the title should be validated after login


    Scenario: Verify login
        Given I navigate to the Website
        When I enter my "username"
        And I enter my "password"
        And I check the "Remember me" checkbox
        And I click on the sign-in button
        Then the title should be validated after login












