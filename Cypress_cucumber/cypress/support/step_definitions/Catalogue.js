const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const CataloguePages = require("../pages/CataloguePages");
const catalogue = new CataloguePages();

Given('A user is in the home page', () => {
    cy.visit('/')
})
When('A user select the {string} and {string} and {string}', (CategorieName, ArticleCategorieName, ArticleName) => {
    catalogue.SelectArticleCategorie(CategorieName, ArticleCategorieName, ArticleName)
})
Then('Verify that {int} article minimum is present', (minarticle) => {
    catalogue.VerifyPresenceOfXArticle(minarticle)
})
And('A user show all the product 12,24 or 36 in one page based on the total of products', () => {
    catalogue.SelectOfAllArticle()
})
When('A user tap {string} in search barre', (article) => {
    catalogue.TapInSearchBarre(article)
})
Then('A scrolling menu appaer with two value possible {string} {string}', (option1, option2) => {
    catalogue.VerifyPresenceOfValue(option1, option2)
})
When('a user click on one of the option', (table) => {
    catalogue.ClickOnOption(table)
})
When('A user click on the option {string}', (option) => {
    catalogue.ClickOnOption(option)
})
Then('The title {string}  appear', (pagetitle) => {
    catalogue.VerifyTitlePage(pagetitle)
})
And('Rafraichir la page', () => {
    catalogue.Rafraichir()
})
Then('The results are for {string} and {string} are available', (ver1, ver2) => {
    catalogue.VerifyRealtedSearchTerms(ver1, ver2)
})
When('A user choose the option {string} and the sous option {string}', (option, sousoption) => {
    catalogue.ChooseSize(option, sousoption)
})
And('All the product are in the correct size {string}', (size) => {
    catalogue.VerifyOptionSelected(size)
})
When('A user select the sort option {string}', (option) => {
    catalogue.SortProductfonction(option)
})

module.exports = {
    Given,
    When,
    And,
    Then
};











