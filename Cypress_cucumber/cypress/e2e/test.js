

describe("locatores demo", function () {

    it("viist application", function () {
        cy.visit("https://www.saucedemo.com/")
        cy.xpath("//div[div/a/div[contains(text(),'Sauce Labs Backpack')]]/./div/button").click()
    })
})