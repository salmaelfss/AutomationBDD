const homeSaucePage = require('../pages/homeSaucePage');
const loginElements = new homeSaucePage();
const { _, $ } = Cypress

class AbstractloginSteps {

    typeUsername(username) {
        loginElements.elements.usernameInput().type(username);
    }

    typePassword(password) {
        loginElements.elements.passwordInput().type(password);
    }

    clickLogin() {
        loginElements.elements.loginBtn().click();
    }

    errorMessage(errorMessage) {
        loginElements.elements.errorMessage().should('have.text', errorMessage)
    }

    AddProduct(ProductName) {
        loginElements.elements.ProductXpath(ProductName).click();
    }

    AddProductWithPrice(ProductSeuil) {
        loginElements.elements.AllProductPrice().each(($div) => {
            const priceText = $div.text().replace('$', '');
            const price = parseFloat(priceText);
            const $buttonElement = $div.parent().find('button');
            if (price <= ProductSeuil) {
                cy.log(price)
                $buttonElement.click()
            }
        })
    }

    EnterPersonalInformation(FirstName, LastName, PostalCode) {
        loginElements.elements.ShoppingCartButton().click();
        loginElements.elements.ButtonCheckOut().click();
        loginElements.elements.FirstNameInputPI().type(FirstName);
        loginElements.elements.LastNameInputPI().type(LastName);
        loginElements.elements.PostalCodeInputPI().type(PostalCode);
        loginElements.elements.ButtonContinue().click();
    }

    VerifyShoppingCart() {
        this.EnterPersonalInformation;
        let sum = 0;
        let Itemsprice = 0;
        //faire la somme de tout les éléments de mon panier
        cy.get('.inventory_item_price').each(($price) => {
            const priceText = $price.text().replace('$', '');
            const price = parseFloat(priceText);
            sum += price;
        });
        //Récupérer le total de mon panier à partir du site
        cy.get('.summary_subtotal_label').invoke('text').then((text) => {
            const priceText = text.replace('Item total: $', '');
            const Itemsprice = parseFloat(priceText);
            cy.log(Itemsprice);
            // Vérifier si TotalItems = Sum(tout les produits)
            if (Itemsprice == sum) {
                cy.log('Le total de tous les produits correspond au total du panier')

            } else {
                cy.log('Le total de tous les produits ne correspond pas au total du panier')
            }
        });
    }

    //Site e-commerce LUMA
    ClickOnCreateAnAccount() {
        loginElements.elements.ButtonCreateAnAccountNav().click()
    }

    TypeFirstName(username) {
        loginElements.elements.FirstNameInput().type(username);
    }

    TypeLastName(password) {
        loginElements.elements.LastNameInput().type(password);
    }

    TypeEmail(email) {
        loginElements.elements.EmailInput().type(email);
    }

    TypePassword2(password) {
        loginElements.elements.PasswordInput2().clear().type(password);
    }

    ConfirmPassword(confirmpassword) {
        loginElements.elements.PasswordConfirmationInput().type(confirmpassword);
    }

    AddNewsLetterOption() {
        loginElements.elements.CheckBoxNewsletter().click();
    }

    ClickButtonCreateAccount() {
        loginElements.elements.ButtonCreateAccount().click();
    }

    VerifyInscription(message) {
        loginElements.elements.InscriptionNotifMessage().should('have.text', message)
    }

    VerifyPersonalInformation(firstName, lastName, email) {
        cy.wait(2000)
        //loginElements.elements.BoxInformation().should('have.text', '\n' + firstName + '&nbsp;' + lastName + '\n' + email + '\n')
        loginElements.elements.BoxInformation().contains(firstName)
        loginElements.elements.BoxInformation().contains(lastName)
        loginElements.elements.BoxInformation().contains(email)
    }

    NewsletterInformationFct(message) {
        //loginElements.elements.BoxNewsletterInformation().should('have.text', '\n' + message)
        loginElements.elements.BoxNewsletterInformation().contains(message)
    }

    VerifyUnderPasswordMessage(message, label) {
        loginElements.elements.Underpassword().should('have.text', '\n' + message + '\n' + label + '\n')

    }

    VerifyExplicationMessagePassword(message) {
        loginElements.elements.ExplicationMessagePassword().should('have.text', message)
    }

    VerifyExplicationMessageConfirmPassword(message) {
        loginElements.elements.ExplicationMessageConfirmPassword().should('have.text', message)
    }

    VerifyExplicationMessageEmail(message) {
        loginElements.elements.ExplicationMessageEmail().should('have.text', message)
    }

    ClickOnSignIn() {
        loginElements.elements.SignInNav().click()
    }

    SignInfct(email, password) {
        loginElements.elements.EmainSignInInput().type(email)
        loginElements.elements.PasswordSignInInput().type(password)
    }

    ClickOnSignInbutton() {
        loginElements.elements.SignInButton().click()
        cy.wait(2000)
    }

    VerifyNavName(fullname) {
        loginElements.elements.NavName().should('have.text', 'Welcome,' + " " + fullname + '!')
    }

    ClickMenu() {
        loginElements.elements.MenuNavButton().click()

    }

    VerifyWelcomeMenuItems(item1, item2, item3) {
        loginElements.elements.CustomerWelcomeMenu(item1).should('have.text', "My Account")
        // loginElements.elements.CustomerWelcomeMenu(item2).should('have.text', 'My Wish List' + " " + '\n')
        loginElements.elements.CustomerWelcomeMenu(item2).contains('My Wish List')
        //loginElements.elements.CustomerWelcomeMenu(item3).should('have.text', "\nSign Out ")
        loginElements.elements.CustomerWelcomeMenu(item3).contains('Sign Out')
    }

    ChooseAMenuItem(menuitem) {
        cy.wait(2000)
        loginElements.elements.CustomerWelcomeMenu().should('have.text', menuitem).click()

    }

    SignOutfct() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        loginElements.elements.SignOutButton().click({})
    }

    VerifyPageTitle(TitleName) {
        loginElements.elements.PageTitle().should('have.text', TitleName)
    }

    ChooseAboxInformationAction(ActionName) {
        loginElements.elements.BoxInformationActions1(ActionName).click()
    }

    ChooseAboxInformationAction2(ActionName) {
        loginElements.elements.BoxInformationActions2(ActionName).click()
    }

    ChangeInputOfEdit(Val1, Val2, Input1, Input2, Id1, Id2) {
        loginElements.elements.AllEditInput(Input1, Id1).clear().type(Val1)
        loginElements.elements.AllEditInput(Input2, Id2).clear().type(Val2)

    }

    ChooseChangeAction(Action) {
        loginElements.elements.ChangeOption(Action).click()
    }

    VerifyFieldsetCE(title) {
        loginElements.elements.Changefieldappear(title).should('have.text', title)
    }

    SaveAction() {
        loginElements.elements.SaveButton().click()
    }
    GoIndexPage() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/index/')
    }


    ChangePasswordFunction(current_password, new_password, confirm_password) {
        loginElements.elements.CurrentPasswordInput().type(current_password)
        loginElements.elements.NewPasswordInput().type(new_password)
        loginElements.elements.ConfirmNewPassword().type(confirm_password)
    }




}
//loginElements.elements.ButtonAddtocartXpath("$" + price).click();
//cy.get('.inventory_item_price').contains("$" + price).closest('button').click()
//closest('div').should('have.class', 'pricebar').contains('priceText').click()
//const priceText = cy.get('.inventory_item_price').text().trim().replace('$', '');
//cy.get('.inventory_item_price').invoke('text').then(parseFloat).then((value) => {
// cy.log(value);
// }).should('be.gt', 10);
//cy.get('.inventory_item_price').each(($div) => {

//const price = parseFloat($div.text()).should('be.lt', 10)
//cy.get('.inventory_item_price').invoke('text').then(parseFloat).should('be.lt', 10)
//const $parent = $div.closest('.btn btn_primary btn_small btn_inventory');
//$parent.click();
//})



//const price1 = cy.get('.inventory_item_price')
// el1.each(($div) => {
//const priceText = Cypress.$($div).text().trim().replace('$', '');
//   const price = parseFloat($div);
// if (price <= 10) {
//   loginElements.elements.ButtonAddtocartXpath(const1).click();
//}
//});


//}


module.exports = AbstractloginSteps;
//exporter et non pas appelé