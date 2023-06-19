class AbstractloginElements {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),
        ProductXpath: (ProductName) => cy.xpath(`//div[div/a/div[contains(text(),"${ProductName}")]]/./div/button`),
        ButtonAddtocartXpath: (ProductPrice) => cy.xpath(`//div/div/div[contains(text(),"${ProductPrice}")]/../button`),
        AllProductPrice: () => cy.get('.inventory_item_price'),
        ShoppingCartButton: () => cy.get('.shopping_cart_link'),
        ButtonCheckOut: () => cy.get('[data-test="checkout"]'),
        FirstNameInputPI: () => cy.get('[data-test="firstName"]'),
        LastNameInputPI: () => cy.get('[data-test="lastName"]'),
        PostalCodeInputPI: () => cy.get('[data-test="postalCode"]'),
        ButtonContinue: () => cy.get('[data-test="continue"]'),

        //              <- New Site ->

        //xpath ButtonCreateAnAccount: () => cy.xpath(`//div[@class="panel header"]/ul/li[3]/a`),
        ButtonCreateAnAccountNav: () => cy.get('.panel > .header > :nth-child(3) > a'),
        //xpath FirstNameInput: () =>cy.xpath(`//div[@class='control']/input[@name='firstname']`),
        FirstNameInput: () => cy.get('#firstname'),
        LastNameInput: () => cy.get('#lastname'),
        EmailInput: () => cy.get('#email_address'),
        PasswordInput2: () => cy.get('#password'),
        PasswordConfirmationInput: () => cy.get('#password-confirmation'),
        //xpath ButtonCreateAccount: () =>cy.xpath(`//div[@class='primary']/button`),
        ButtonCreateAccount: () => cy.get('#form-validate > .actions-toolbar > div.primary > .action > span'),
        //xpath CheckBoxNewsletter: () =>cy.xpath(`//div[@class='field choice newsletter']/input`),
        CheckBoxNewsletter: () => cy.get('#is_subscribed'),
        //xpath SuccessMessage: () =>cy.xpath(`div[@class='message-success success message']/div`),
        InscriptionNotifMessage: () => cy.xpath(`//div[@class='messages']/div/div`),
        // InscriptionNotifMessage: () => cy.get('.message-success > div'),
        //div[@class='box box-information']/div[@class='box-content']/p
        BoxInformation: () => cy.get('.box-information > .box-content > p'),
        BoxNewsletterInformation: () => cy.get('.box-newsletter > .box-content > p'),
        Underpassword: () => cy.get('#password-strength-meter'),
        // cy.xpath(`//div[@class='password-weak']/div/text()`),
        ExplicationMessagePassword: () => cy.get('#password-error'),
        //div[@class='control']/div[@id='password-confirmation-error']
        ExplicationMessageConfirmPassword: () => cy.xpath(` //div[@class='control']/div[@id='password-confirmation-error']`),
        ExplicationMessageEmail: () => cy.xpath(`//div[@class='control']/div[@class='mage-error']/text()`),

        SignInNav: () => cy.get('.panel > .header > .authorization-link > a'),
        EmainSignInInput: () => cy.get('#email'),
        PasswordSignInInput: () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'),
        SignInButton: () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'),
        NavName: () => cy.xpath(`//div[@class='panel header']/ul[@class='header links']//li[@class='greet welcome']/span`),
        MenuNavButton: () => cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action.switch'),
        CustomerWelcomeMenu: () => cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'), // My Account -My Wish List -Sign Out
        SignOutButton: () => cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a'),
        BoxInformationActions1: (ActionName) => cy.xpath(`//div[@class='box box-information']/div[@class='box-actions']/a/span[contains(text(),"${ActionName}")]`), //Edit 
        BoxInformationActions2: (ActionName) => cy.xpath(`//div[@class='box box-information']/div[@class='box-actions']/a[contains(text(),"${ActionName}")]`), //Change password
        PageTitle: () => cy.xpath(`//h1/span`),
        //NewFirstName: () => cy.get('#firstname'),
        //NewLastName: () => cy.get('#lastname'),
        ChangeOption: (ChangeOption) => cy.xpath(`//div[@class='field choice']/label/span[contains(text(),"${ChangeOption}")]/../../input`), // change email - change password
        Changefieldappear: (title) => cy.xpath(`//fieldset[@class='fieldset password']/legend/span[contains(text(),"${title}")]`),
        //NewEmail: () => cy.get('#email'),
        //CurrentPassword: () => cy.get('#current-password'),
        //NewPasswordInput: () => cy.xpath(`//div[@class='field new password required']/div/input`),
        // NewConfirmPasswordInput: () => cy.xpath(`//div[@class='field confirmation password required']/div/input`),
        AllEditInput: (InputName, IdName) => cy.xpath(`//div[@class='control']/input[@name="${InputName}"][@id="${IdName}"]`),
        //AllButton: (ButtonName) => cy.xpath(`//div[@class='actions-toolbar']//div/button/span[contains(text(),"${ButtonName}")]`),
        SaveButton: () => cy.get('#form-validate > .actions-toolbar > div.primary > .action'),
        CurrentPasswordInput: () => cy.get('#current-password'),
        NewPasswordInput: () => cy.get('#password'),
        ConfirmNewPassword: () => cy.get('#password-confirmation')



        //Page My Account 

    }

}












//PriceXpath: () => cy.xpath(`//div/div[@class='pricebar']/div/text()`), 
//ButtonAddtocartXpath: (ProductPrice) => cy.xpath(`div/div[@class='pricebar'][div[contains(text(),"${ProductPrice}")]]/./button`),
//buttonAdd: () => cy.xpath(`//div/div/button`),

export default AbstractloginElements;

