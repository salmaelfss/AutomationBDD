Feature: Login Feature

    This feature is required for a user to log in

    Background:
        Given A user opens the login page

    Scenario:  Succes login
        When A user enter the username "standard_user"
        And A user enter the pasword "secret_sauce"
        And A user click on the loggin button
        Then A user will be logged in


    Scenario:  Failed login
        When A user enter the username "locked_out_user"
        And A user enter the pasword "secret_sauce"
        And A user click on the loggin button
        Then A user will "Epic sadface: Sorry, this user has been locked out." message
    #Then A user will be receiving a failed message


    Scenario:  Incorrect user
        When A user provides incorrect credentials
            | username  | password      |
            #     | testUser | secret_sauce |
            | testUser1 | secret_sauce2 |
        And A user click on the loggin button
        Then A user will "Epic sadface: Username and password do not match any user in this service" message