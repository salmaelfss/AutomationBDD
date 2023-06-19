const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const ProductClass = require("../helperclass/AbstractloginSteps");
const ProductSteps = new ProductClass();


Given('A user is logged in with {string} and {string}', (username, password) => {
    cy.visit('/');
    ProductSteps.typeUsername(username);
    ProductSteps.typePassword(password);
    ProductSteps.clickLogin();
});


When('A user click the button Add to cart of {string}', (ProductName) => {
    ProductSteps.AddProduct(ProductName);
});

Then('A user will succefully buy a product', () => {
    cy.url().should('contains', '/inventory.html')

});

When("A user click on all products with price < '{int}'", (ProductSeuil) => {
    ProductSteps.AddProductWithPrice(ProductSeuil);
});

And("A user check the shopping cart and enter the personal information {string} and {string} and '{int}'", (FirstName, LastName, PostalCode) => {
    ProductSteps.EnterPersonalInformation(FirstName, LastName, PostalCode);
});

Then("The total price of product is equal to the total price of the shopping cart", () => {
    ProductSteps.VerifyShoppingCart()

});
