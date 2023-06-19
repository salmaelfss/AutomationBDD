Feature: Account feature

    Background:
        Given A user opens the login page


    Scenario: User enters personal information with a valid email and password without subscribing to the newsletter
        When the user clicks on the Create an Account
        And the user enters the personal information "salma", "el fadili", "cougrausseikoummu-8@yopmail.com", "Polytech@123", and "Polytech@123"
        And the user clicks on the Create an Account button
        Then a confirmation message "Thank you for registering with the Main Website Store." should appear
        And the contact information should be displayed correctly as "salma", "el fadili", and "cougrausseikoummu-8@yopmail.com"
        And the user should not be subscribed to the newsletter, and a notification message should appear saying "You are not subscribed to
    our newsletter."

    Scenario: User enters personal information with a weak password or incorrect confirmation
        When the user clicks on the Create an Account
        And the user enters the personal information "salma", "el fadili", "cougrausseikoummu-65@yopmail.com", and "Polytec"
        Then an underpassword message "Password Strength:" "Weak" should appear
        And an explanation message about the password requirements should appear "Minimum length of this field must be equal or greater
        than 8 symbols. Leading and trailing spaces will be ignored."
        When the user enters a password with bad policies "polytech"
        Then an underpassword message "Password Strength:" "Weak" should appear
        And an explanation message about the password requirements should appear "Minimum of different classes of characters in password
        is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
        When the user enters a valid password "Polytech@1" but an incorrect confirmation "Polytec"
        And the user clicks on the Create an Account button
        Then an explanation message about the confirmation password should appear, stating "Please enter the same value again."





    #Scenario:  User enters personal information with a weak password or bad confirmation
    #   When  A user click on Create an Account
    #   And   A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-65@yopmail.com" and "Polytec"
    #   Then  A underpassword message "Password Strength:" "Weak" appears
    #   And   A explication message about password "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored." appears
    #   When  A user enter password with bad policies "polytech"
    #   Then  A underpassword message "Password Strength:" "Weak" appears
    #   And   A explication message about password "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters." appears
    #   When  A user enter good password "Polytech@1" but bad confirmation "Polytec"
    #   And   A user click on Create an Account button
    #   Then  A explication message about confirm password "Please enter the same value again." appears















    Scenario:  CT_EC_CC_OK_AvecNewsletter
    #   When A user click on Create an Account
    #   And A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-9@yopmail.com" and "Polytech@123" and "Polytech@123"
    #   And A user add the Newsletter option
    #   And A user click on Create an Account button
    #   Then A confirmation message "Thank you for registering with Main Website Store." appears
    #   And The contact Information are correct "salma" and "el fadili" and "cougrausseikoummu-9@yopmail.com"
    #   And The newsletter are registed and notify this message "You are subscribed to \"General Subscription\"."

    #Scenario:  User enters personnal information with a good email and password without subscrieb in the newsletter
    #    When A user click on Create an Account
    #    And  A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-8@yopmail.com" and "Polytech@123" and "Polytech@123"
    #   And  A user click on Create an Account button
    #    Then A confirmation message "Thank you for registering with Main Website Store." appears
    #   And  The contact Information are correct "salma" and "el fadili" and "cougrausseikoummu-8@yopmail.com"
    #   And  The newsletter are registed and notify this message "You aren't subscribed to our newsletter."


    #Scenario:  User enters personal information with a weak password or bad confirmation
    #   When  A user click on Create an Account
    #   And   A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-65@yopmail.com" and "Polytec"
    #   Then  A underpassword message "Password Strength:" "Weak" appears
    #   And   A explication message about password "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored." appears
    #   When  A user enter password with bad policies "polytech"
    #   Then  A underpassword message "Password Strength:" "Weak" appears
    #   And   A explication message about password "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters." appears
    #   When  A user enter good password "Polytech@1" but bad confirmation "Polytec"
    #   And   A user click on Create an Account button
    #   Then  A explication message about confirm password "Please enter the same value again." appears

    #  Scenario:  User enters personal information with a password that meets some of the criteria
    #When  A user click on Create an Account
    #  And   A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-77@yopmail.com" and "Polytech@"
    #  Then  A underpassword message "Password Strength:" "Strong" appears
    #  When  A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-77@yopmail.com" and "Polytech@123"
    #  Then  A underpassword message "Password Strength:" "Very Strong" appears


    Scenario:  User enters personal information with a an existance account with the email
        When  A user click on Create an Account
        And  A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-8@yopmail.com" and "Polytech@123" and "Polytech@123"
        And  A user click on Create an Account button
        Then A confirmation message "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account." appears

    Scenario:  User enters personal information with a an incorrect email adress
        When A user click on Create an Account
        And  A user enter personal information "salma" and "el fadili" and "cougrausseikoummu-8" and "Polytech@123" and "Polytech@123"
        And  A user click on Create an Account button
        Then A underemail message "Please enter a valid email address (Ex: johndoe@domain.com)." appears

    #Scenario:  User modify an account
    #When A user click on Sign In
    #And  A user enter the login and password "test1@gmail.com" and "Polytech@1"
    #And  A user click on Connexion
    #Then The firstname and the lastname "test 1" appears in the right of the pannel header
    #When A user click on Menu
    #Then A menu with "My Account" "My Wish List" "Sign Out" appears
    #When A user click on "My Account" of the customer welcome menu
    #Then The page "My Account" is loadding
    #When A user click on "Edit" of the contact information box
    #Then The page "Edit Account Information" is loadding
    #When A user type "hajar" and "ELF" in input "firstname" and "lastname" with id "firstname" and "lastname"
    #And A user click on case "Change Email"
    #Then A fieldset of "Change Email" appear
    #When A user type "sousou@gmail.com" and "Polytech@1" in input "email" and "current_password" with id "email" and "current-password"
    #And A user click on case "Change Password"
    #Then A fieldset of "Change Email and Password" appear
    #When A user type "Polytech@12" and "Polytech@12" in input "password" and "password_confirmation" with id "password" and "password-confirmation"
    #Then A user click on save
    #Then A confirmation message "You saved the account information." appears
    #When A user enter the login and password "sousou@gmail.com" and "Polytech@12"
    #And  A user click on Connexion
    #Then The contact Information are correct "hajar" and "ELF" and "sousou@gmail.com"

    #Scenario:  KO Modifications
    # When A user click on Sign In
    #And  A user enter the login and password "puseiyuboge-7899@yopmail.com" and "Polytech@1"
    #And  A user click on Connexion
    #Then The firstname and the lastname "puseiyuboge 7899" appears in the right of the pannel header
    #When A user click on Menu
    # Then A menu with "My Account" "My Wish List" "Sign Out" appears
    #When A user click on "My Account" of the customer welcome menu
    #Then The page "My Account" is loadding
    # When A user click on "Edit" of the contact information box
    #Then The page "Edit Account Information" is loadding
    #When A user type "hajar" and "ELF" in input "firstname" and "lastname" with id "firstname" and "lastname"
    #And A user click on case "Change Email"
    #Then A fieldset of "Change Email" appear
    #When A user type "xitrattamofa-7541@yopmail.com" and "Polytech@" in input "email" and "current_password" with id "email" and "current-password"
    #And A user click on save
    #Then A confirmation message "The password doesn't match this account. Verify the password and try again." appears
    #When A user click on case "Change Email"
    #And  A fieldset of "Change Email" appear
    #And  A user type "salma.elfadili02" and "Polytech@1" in input "email" and "current_password" with id "email" and "current-password"
    #And A user click on save
    #Then A underemail message "Please enter a valid email address." appears
    #When revenir en arrière
    #When A user click on "Change Password" of the contact information box2
    #And  A user type passwords "Polytech@1" and "Polyt" and "Polyt"
    #And A user click on save
    #Then A explication message about password "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored." appears
    #When A user type passwords "Polytech@1" and "Polytech" and "Polytech"
    #And A user click on save
    #Then A explication message about password "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters." appears
    #When A user type passwords "Polytech@1" and "Polytech@1" and "Polytech@123"
    #And A user click on save
    #Then  A explication message about confirm password "Please enter the same value again." appears
    #When revenir en arrière
    #Then The contact Information are correct "puseiyuboge" and "7899" and "puseiyuboge-7899@yopmail.com"
    #When A user click on Sign Out of the customer welcome menu2
    #And A user click on Sign In
    #And A user enter the login and password "puseiyuboge-7899@yopmail.com" and "Polytech@1"
    #And  A user click on Connexion
    #Then The firstname and the lastname "puseiyuboge 7899" appears in the right of the pannel header

    #Scenario: OK Modification Newsletter
    # #   Given A user is connceted
    #  When A user click on Menu
    #And A user click on "My Account" of the customer welcome menu
    #   Then The page "My Account" is loadding
    #  When A user click on "Edit" of the Newsletter
    #  Then The page "Newsletter Subscription" is loadding
    # When A user click on the checkbox of the newselleter
    # And A user save the changement
    #Then The newsletter are registed and notify this message "You are subscribed to \"General Subscription\"."
    #And the message "We have saved your subscription." appears

    #Scenario: OK Modification Newsletter_2
    #   Given A user is connceted
    #  When A user click on Menu
    # And A user click on "My Account" of the customer welcome menu
    # Then The page "My Account" is loadding
    #When A user click on "Edit" of the Newsletter
    #Then The page "Newsletter Subscription" is loadding
    #When A user click on the checkbox of the newselleter
    #And A user save the changement
    #Then The newsletter are registed and notify this message "You aren't subscribed to our newsletter."
    #And the message "We have removed your newsletter subscription." appears


    Scenario: OK Modification Newsletter universelle
        Given A user is connceted
        When A user click on Menu
        And A user click on "My Account" of the customer welcome menu
        Then The page "My Account" is loadding
        When A user click on "Edit" of the Newsletter
        Then The page "Newsletter Subscription" is loadding
        When Check or Uncheck case
        Then A user save the changement
        And A the adéquat message apears


