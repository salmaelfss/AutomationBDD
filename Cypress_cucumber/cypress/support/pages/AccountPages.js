class AccountPages {
    maVariable;
    elements = {
        //Home Page My Account
        AccountBoxInformationContent: () => cy.get('.block-content >.box.box-information>.box-content'),
        AccountBoxInformationActions: () => cy.get('.block-content >.box.box-information>.box-actions'),
        AccountBoxNewsletterContent: () => cy.get('.block-content >.box.box-newsletter>.box-content'),
        AccountBoxNewsletterActions: () => cy.get('.block-content >.box.box-newsletter>.box-actions'),
        PageTitle: () => cy.get('.page-title-wrapper'),
        PageMessage: () => cy.get('.page.messages'),
        //Page Edit Newsletter of My Account
        NewsletterManageForm: () => cy.get('.form.form-newsletter-manage')


    }
    ClickOnNewsletterActions(ActionName) {
        this.elements.AccountBoxNewsletterActions().contains(ActionName).click()
    }

    VerifyTitleOfAllPage(TitleName) {
        this.elements.PageTitle().contains(TitleName)
    }

    CheckTheNewsletterOption() {
        this.elements.NewsletterManageForm().find('.checkbox').click()
    }

    SaveTheNewsletterModification() {
        this.elements.NewsletterManageForm().find('button').click()
    }

    VerifySubscription(message) {
        this.elements.AccountBoxNewsletterContent().contains(message)
    }

    VerifyPageMessage(message) {
        this.elements.PageMessage().contains(message)
    }

    CheckOrUncheckFct() {

        //this.elements.NewsletterManageForm().find('.checkbox').should('not.be.checked').then(() => {
        //   this.elements.NewsletterManageForm().find('.checkbox').check(); // Si la case est décochée, la coche
        // }).should('be.checked'); // Vérifie que la case est maintenant cochée
        //this.elements.NewsletterManageForm().find('.checkbox').should('be.checked').then(() => {
        //  this.elements.NewsletterManageForm().find('.checkbox').uncheck(); // Si la case est cochée, la décoche
        //}).should('not.be.checked'); // Vérifie que la case est maintenant décochée

        //la méthode .is(':checked') est utilisée pour vérifier si un élément est coché ou non, tandis que la propriété .checked est utilisée pour obtenir ou définir l'état coché ou décoché d'un élément.
        this.elements.NewsletterManageForm().find('.checkbox').then(($checkbox) => {
            const isCheckBoxChecked = $checkbox.is(':checked');
            if (isCheckBoxChecked) {//true
                this.elements.NewsletterManageForm().find('.checkbox').uncheck();
                this.maVariable = 0
            }
            else {
                this.elements.NewsletterManageForm().find('.checkbox').check();
                this.maVariable = 1
            }
        });
    }

    VerifyAdequatMessage() {
        cy.log(this.maVariable)
        if (this.maVariable == 0) {
            this.VerifySubscription("You aren't subscribed to our newsletter.")
            this.VerifyPageMessage("We have removed your newsletter subscription.")
        }
        else {
            this.VerifySubscription("You are subscribed to \"General Subscription\".")
            this.VerifyPageMessage("We have saved your subscription.")
        }
    }






}

export default AccountPages;
