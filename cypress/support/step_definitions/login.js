//dans un autre fichier de votre application, vous pouvez importer la classe MyClass en utilisant require 
//const homeSaucePage = require("../../pages/homeSaucePage")

const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const AbstractloginSteps = require("../helperclass/AbstractloginSteps");
const AbstractloginSteps2 = require("../pages/AccountPages");
const loginSteps = new AbstractloginSteps();
const loginSteps2 = new AbstractloginSteps2();

// Projet 1 : Sur le site Sauce Labs
Given('A user opens the login page', () => {
    cy.visit('');
});

When('A user enter the username {string}', (username) => {
    loginSteps.typeUsername(username)
});

When('A user provides incorrect credentials', (table) => {
    table.hashes().forEach(row => {
        loginSteps.typeUsername(row.username)
        loginSteps.typePassword(row.password)
    });
})

When('A user provides incorrect credentials', (table) => {
    table.hashes().forEach(row => {
        loginSteps.typeUsername(row.username)
        loginSteps.typePassword(row.password)
    });
})

And('A user enter the pasword {string}', (password) => {
    loginSteps.typePassword(password)
})

And('A user click on the loggin button', () => {
    loginSteps.clickLogin()
})

Then('A user will be logged in', () => {
    cy.url().should('contains', '/inventory.html')
});

Then('A user will {string} message', (errorMessage) => {
    loginSteps.errorMessage(errorMessage)
});

//Projet 2 : sur le site LUMA

Given('A user opens the login page', () => {
    cy.visit('');
});

When('A user click on Create an Account', () => {
    loginSteps.ClickOnCreateAnAccount();
});

And('A user enter personal information {string} and {string} and {string} and {string} and {string}', (firstName, lastName, email, password, confirmpassword) => {
    loginSteps.TypeFirstName(firstName)
    loginSteps.TypeLastName(lastName)
    loginSteps.TypeEmail(email)
    loginSteps.TypePassword2(password)
    loginSteps.ConfirmPassword(confirmpassword)
});

And('A user add the Newsletter option', () => {
    loginSteps.AddNewsLetterOption()
});

And('A user click on Create an Account button', () => {
    loginSteps.ClickButtonCreateAccount()
});

Then('A confirmation message {string} appears', (confirmessage) => {
    loginSteps.VerifyInscription(confirmessage)
});

And('The contact Information are correct {string} and {string} and {string}', (firstName, lastName, email) => {
    loginSteps.VerifyPersonalInformation(firstName, lastName, email)
});

And('The newsletter are registed and notify this message {string}', (subscribemessage) => {
    loginSteps.NewsletterInformationFct(subscribemessage)
});


And('A user enter personal information {string} and {string} and {string} and {string}', (firstName, lastName, email, password) => {
    loginSteps.TypeFirstName(firstName)
    loginSteps.TypeLastName(lastName)
    loginSteps.TypeEmail(email)
    loginSteps.TypePassword2(password)
});

Then('A underpassword message {string} {string} appears', (message, label) => {
    loginSteps.VerifyUnderPasswordMessage(message, label)
})


And('A explication message about password {string} appears', (message) => {
    loginSteps.VerifyExplicationMessagePassword(message)
})

When('A user enter password with bad policies {string}', (password) => {
    loginSteps.TypePassword2(password)
})


When('A user enter good password {string} but bad confirmation {string}', (password, confirmpassword) => {
    loginSteps.TypePassword2(password)
    loginSteps.ConfirmPassword(confirmpassword)
})

Then('A explication message about confirm password {string} appears', (message) => {
    loginSteps.VerifyExplicationMessageConfirmPassword(message)
})

Then('A underemail message {string} appears', (message) => {
    loginSteps.VerifyExplicationMessageEmail(message)
})

When('A user click on Sign In', () => {
    loginSteps.ClickOnSignIn()
})

And('A user enter the login and password {string} and {string}', (email, password) => {
    loginSteps.SignInfct(email, password)
})

And('A user click on Connexion', () => {
    loginSteps.ClickOnSignInbutton()
})

Then('The firstname and the lastname {string} appears in the right of the pannel header', (fullname) => {
    loginSteps.VerifyNavName(fullname)
})

When('A user click on Menu', () => {
    loginSteps.ClickMenu()
})

Then('A menu with {string} {string} {string} appears', (item1, item2, item3) => {
    loginSteps.VerifyWelcomeMenuItems(item1, item2, item3)
})

When('A user click on {string} of the customer welcome menu', (menuitem) => {
    //cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    loginSteps.ChooseAMenuItem(menuitem)
})

Then('The page {string} is loadding', (titleName) => {
    loginSteps2.VerifyTitleOfAllPage(titleName)
})

When('A user click on {string} of the contact information box', (ActionName) => {
    loginSteps.ChooseAboxInformationAction(ActionName)
})

When('A user type {string} and {string} in input {string} and {string} with id {string} and {string}', (Val1, Val2, Input1, Input2, Id1, Id2) => {
    loginSteps.ChangeInputOfEdit(Val1, Val2, Input1, Input2, Id1, Id2)
})

And('A user click on case {string}', (ChangeCase) => {
    loginSteps.ChooseChangeAction(ChangeCase)
})

Then('A fieldset of {string} appear', (title) => {
    loginSteps.VerifyFieldsetCE(title)
})

Then('A user click on save', () => {
    loginSteps.SaveAction()
})


When('revenir en arrière', () => {
    loginSteps.GoIndexPage()
})

When('A user click on {string} of the contact information box2', (action) => {
    loginSteps.ChooseAboxInformationAction2(action)
})

When('A user type passwords {string} and {string} and {string}', (current_password, new_password, confirm_password) => {
    loginSteps.ChangePasswordFunction(current_password, new_password, confirm_password)
})

When('A user click on Sign Out of the customer welcome menu2', (menuitem) => {
    loginSteps.SignOutfct(menuitem)
})

Given('A user is connceted', () => {
    loginSteps.ClickOnSignIn()
    loginSteps.SignInfct("puseiyuboge-7899@yopmail.com", "Polytech@1")
    loginSteps.ClickOnSignInbutton()

})

module.exports = {
    Given,
    When,
    And,
    Then
};

//Then('A user will be receiving a failed message', () => {
//    homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
//})
//Dans le contexte de Cypress, vous pouvez utiliser module.exports pour exporter des classes qui représentent des pages de votre application web ou des composants réutilisables pour vos tests. De cette façon, vous pouvez organiser votre code en modules réutilisables qui peuvent être importés dans différents fichiers de test Cypress.

// @Then('A user will {string} message', (errorMessage) => {
// homeSaucePage.elements.errorMessage().should('have.text', errorMessage)
//})