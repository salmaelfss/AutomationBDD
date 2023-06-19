
class CataloguePages {

    elements = {
        NavBarreCatalogue: (CategorieName) => cy.contains('.ui-menu-item', CategorieName),
        ProductInfo: () => cy.get('.item.product'),
        TotalNumberPOfProduct: () => cy.get('.toolbar-amount'),
        ShowSelecter: () => cy.get('select#limiter.limiter-options'),
        Header: () => cy.get('.header.content'),
        OptionOfDeroulantMenu: () => cy.get('.qs-option-name'),
        TitlePage: () => cy.get('.page-title'),
        RelatedSearchTerms: () => cy.get('.block>dd'),
        FilterOptions: () => cy.get('.filter-options>div>div.filter-options-title'),
        SizeAndColorOptions: (sousoption) => cy.get(`div.swatch-attribute-options.clearfix>a>div[option-label="${sousoption}"]`),
        //VerifyOptionSelected: (sousoption) => cy.get(`div[aria-checked=true][option-label="${sousoption}"]`),
        VerifyOptionSelected: (sousoption) => cy.get(`div[option-label="${sousoption}"]`),
        ToolbarNav: () => cy.get('.toolbar-sorter.sorter>select>option'),

    }

    //---------> Je vérifie les choix Women puis Tops mais pas puis Bras 
    SelectArticleCategorie(CategorieName, ArticleCategorieName, ArticleName) {
        this.elements.NavBarreCatalogue(CategorieName)
            // vérifie que l'élément est visible
            .trigger('focus') // met le focus sur l'élément
            .within(() => { // sélectionne un élément à l'intérieur de l'élément précédent
                cy.contains(ArticleCategorieName) // sélectionne l'élément avec la classe ArticleCategorieName
                    .trigger('focus', { force: true, setTimeout: 5000 })//.within //!!!!! prblm code normalement ici mon within cherche dans à l'intérieur de la structure ou il y a le articlecategoriename mais moi j'ai normalement mon article name dans une autre place
                cy.contains(ArticleName).click({ force: true })
            })
    }

    VerifyPresenceOfXArticle(minarticle) {
        this.elements.ProductInfo().its('length').should('be.gte', minarticle)
    }

    /*SelectOfAllArticle() {
        this.elements.TotalNumberPOfProduct().eq(0).invoke('text').then((TotalNumber) => {
            const number = parseInt(TotalNumber);
            cy.log(number)
            if (number <= 12) {
                cy.get('div.field.limiter').invoke('attr', 'style', 'display: block').then(() => {
                    this.elements.ShowSelecter().eq(1).select('12').should('be.visible');
                });
            } else if (12 < number <= 24) {
                cy.get('div.field.limiter').invoke('attr', 'style', 'display: block').then(() => {
                    this.elements.ShowSelecter().eq(1).select('24').should('be.visible');
                });
            } else {
                cy.get('div.field.limiter').invoke('attr', 'style', 'display: block').then(() => {
                    this.elements.ShowSelecter().eq(1).select('36').should('be.visible');;
                });
            }
            this.elements.ProductInfo().its('length').should('be.eq', number)
            cy.log(`Il y a ${number} produits dans cette page `)
        });
    }*/

    SelectOfAllArticle() {
        const promise = new Promise((resolve, reject) => {
            let number
            this.elements.TotalNumberPOfProduct().eq(0).find('span').its('length').then((numberofelement) => {
                cy.log(numberofelement)
                if (numberofelement == 3) {
                    this.elements.TotalNumberPOfProduct().eq(0).find('span').eq(2).invoke('text').then((TotalNumber) => {
                        number = parseInt(TotalNumber);
                        cy.log(number);
                        resolve(number);
                    })
                }
                else {
                    this.elements.TotalNumberPOfProduct().eq(0).find('span').eq(0).invoke('text').then((TotalNumber) => {
                        number = parseInt(TotalNumber);
                        cy.log(number);
                        resolve(number);
                    })
                }

                promise.then((number) => {
                    cy.log(number);
                    if (number <= 12) {
                        cy.get('div.field.limiter').invoke('attr', 'style', 'display: block').then(() => {
                            this.elements.ShowSelecter().eq(1).select('12').should('be.visible');
                        });
                    } else if (12 < number <= 24) {
                        cy.get('div.field.limiter').invoke('attr', 'style', 'display: block').then(() => {
                            this.elements.ShowSelecter().eq(1).select('24').should('be.visible');
                        });
                    } else {
                        cy.get('div.field.limiter').invoke('attr', 'style', 'display: block').then(() => {
                            this.elements.ShowSelecter().eq(1).select('36').should('be.visible');;
                        });
                    }
                    cy.wait(3000)
                    this.elements.ProductInfo().its('length').should('be.eq', number)
                    cy.log(`Il y a ${number} produits dans cette page `)

                });

            })
        })
    }



    NumberOfArticle(nbrarticle) {
        this.elements.ProductInfo().its('length').should('be.eq', nbrarticle).then((numElements) => {
            // Utilisez la variable "numElements" pour effectuer d'autres opérations si nécessaire
            cy.log(`Il y a ${numElements} éléments correspondant à la classe "productinfo".`)
        })
    }

    //TapInSearchBarre(table) {
    //table.hashes().forEach(row => {
    //    this.elements.Header().find('input').type(row.article)
    //  cy.wait(2000)
    //});
    //}

    TapInSearchBarre(article) {
        // cy.viewport(1536, 960)
        cy.wait(1000)
        this.elements.Header().find('input').type(article)
        cy.wait(5000)
        cy.get('#search_autocomplete').should('be.visible')
    }


    VerifyPresenceOfValue(option1, option2) {   //---------------------->
        cy.wait(8000)
        this.elements.OptionOfDeroulantMenu().should('be.visible').contains(option1).should('exist')
        this.elements.OptionOfDeroulantMenu().should('be.visible').contains(option2).should('exist')
    };

    //REMARQUE : Si j'ajoute un timeout la fonction précedente ne marche pas 

    ClickOnOption(option) {
        this.elements.OptionOfDeroulantMenu().should('exist').contains(option).should('be.visible').click();
    }

    VerifyTitlePage(PageTitle) {
        this.elements.TitlePage().should('be.visible').contains(PageTitle)
    }

    VerifyRealtedSearchTerms(ver1, ver2) {
        this.elements.RelatedSearchTerms().should('be.visible').contains(ver1)
        this.elements.RelatedSearchTerms().should('be.visible').contains(ver2)
    }

    ChooseSize(option, sousoption) {
        this.elements.FilterOptions().contains(option).click() //wait fait le role inverse à la place de garder l'élément visible jusqu'à son apparition ,il se cache rapidement
        this.elements.SizeAndColorOptions(sousoption).click({ force: true })
    }

    VerifyOptionSelected(size) {
        this.elements.VerifyOptionSelected(size).then($optionselected => {
            for (let i = 0; i < $optionselected.length; i++) {
                cy.wrap($optionselected[i]).should('have.attr', 'aria-checked', 'true');
            }
        })
    }

    SortProductfonction(option) {
        this.elements.ToolbarNav().eq(0).find(option).click()
    }

    Rafraichir() {
        cy.wait(2000)
        cy.reload()
    }

}
export default CataloguePages;

