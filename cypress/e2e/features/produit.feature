Feature: Product Feature

    This feature is required for a user to buy a product
    Background:
        Given A user is logged in with "standard_user" and "secret_sauce"

    Scenario:  Succes buy

        When A user click the button Add to cart of "Sauce Labs Backpack"
        Then A user will succefully buy a product

    Scenario:  Add product with pprice < 10
        When A user click on all products with price < '10'
        And A user check the shopping cart and enter the personal information "Salma" and "EL fadili" and '26000'
        Then The total price of product is equal to the total price of the shopping cart

