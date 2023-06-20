Feature: Catalogue feature
    #Un scénario = un cas de test avec des conditions initiales, un déroulement et des résultats attendus. Il ne valide qu'une seule fonctionnalité/exigence.

    Background:
        Given A user is in the home page

    Scenario Outline:  Rechercher un article à partir du menu
        When A user select the "<NavOption>" and "<Categorie>" and "<SousCategorie>"
        Then Verify that 1 article minimum is present
        And A user show all the product 12,24 or 36 in one page based on the total of products
        Examples:
            | NavOption | Categorie | SousCategorie |
            | Women     | Tops      | Jackets       |
            | Women     | Bottoms   | Pants         |

    Scenario Outline: Rechercher un article par le moteur de recherche 1
        When A user tap "<article>" in search barre
        Then A scrolling menu appaer with two value possible "<option1>" "<option2>"
        When A user click on the option "<clickoption>"
        Then The title "<PageTitle>"  appear
        And Rafraichir la page
        Examples:
            | article | option1          | option2        | clickoption      | PageTitle                              |
            | pants   | pants for women  | pants for men  | pants for men    | Search results for: 'pants for men'    |
            | jacket  | jacket for women | Jacket for men | jacket for women | Search results for: 'jacket for women' |


# Scenario Outline: Rechercher un article par le moteur de recherche 2
#    When A user tap "<article>" in search barre
#   Then A scrolling menu appaer with two value possible "<option1>" "<option2>"
#  When A user click on the option "<clickoption>"
# Then The results are for "<verification1>" and "<verification2>" are available
#And Rafraichir la page

#Examples:
#        | article | option1          | option2        | clickoption | verification1 | verification2 |
#         | pants   | pants for women  | pants for men  | pants       | men           | women         |
#       | jacket  | jacket for women | Jacket for men | jacket      | men           | women         |


# Scenario Outline:
#   When A user select the "<NavOption>" and "<Categorie>" and "<SousCategorie>"
#    Then Verify that 1 article minimum is present
#  When A user choose the option "<option>" and the sous option "<sousoption>"
# Then Verify that 1 article minimum is present
#And All the product are in the correct size "<sousoption>"
#Examples:
#   | NavOption | Categorie | SousCategorie | option | sousoption |
#  | Women     | Tops      | Jackets       | Size   | XS         |
# | Women     | Bottoms   | Pants         | Size   | 28         |
#| Women     | Bottoms   | Pants         | Color  | Blue       |

#Scenario Outline:
#   When A user select the "<NavOption>" and "<Categorie>" and "<SousCategorie>"
#  Then Verify that 1 article minimum is present
# When A user select the sort option "<option>"
#Then Verify that 1 article minimum is present
#And All the product are in the correct size "<sousoption>"
#Examples:
#   | NavOption | Categorie | SousCategorie | option |
#  | Women     | Tops      | Jackets       | Price  |
#| Women     | Bottoms   | Pants         |   |