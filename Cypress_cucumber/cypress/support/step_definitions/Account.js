const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const AccountPages = require("../pages/AccountPages");
const loginSteps = new AccountPages();

When('A user click on {string} of the Newsletter', (ActionName) => {
    loginSteps.ClickOnNewsletterActions(ActionName)
})

When('A user click on the checkbox of the newselleter', () => {
    loginSteps.CheckTheNewsletterOption()
})

And('A user save the changement', () => {
    loginSteps.SaveTheNewsletterModification()
})

Then('The newsletter are registed and notify this message {string}', (message) => {
    loginSteps.VerifySubscription(message)
})

And('the message {string} appears', (message) => {
    loginSteps.VerifyPageMessage(message)
})

When('Check or Uncheck case', () => {
    loginSteps.CheckOrUncheckFct()
})

And('A the adéquat message apears', () => {
    loginSteps.VerifyAdequatMessage()
})

module.exports = {
    Given,
    When,
    And,
    Then
};