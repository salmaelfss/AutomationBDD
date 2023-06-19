const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress"); // définir la configuration de cypress 'importer la fonction defineconfig depuis le module 'cypress'

module.exports = defineConfig({ /* la configuration définie à l'aide de defineConfig, afin que Cypress puisse la lire et l'utiliser 
lors de l'exécution des tests*/
  e2e: {
    "baseUrl": "https://magento.softwaretestingboard.com/",
    "chromeWebSecurity": false,
    "supportFile": "cypress/support/e2e.js",/*Chemin d'accès au fichier à charger avant le chargement des fichiers de spécifications. 
    Ce fichier est compilé et regroupé.*/
    "specPattern": "cypress/e2e/features", //test file to load
    setupNodeEvents(on, config) { /*La setupNodeEventsfonction vous permet d'exploiter, de modifier ou d'étendre le comportement interne 
    de Cypress à l'aide des arguments on et config*/
      on('file:preprocessor', cucumber())
    }, /*Dans cette fonction, on enregistre un gestionnaire d'événements pour l'événement file:preprocessor. Cet événement est déclenché par Cypress
     avant que les fichiers de tests ne soient exécutés. Le gestionnaire d'événements associé utilise la fonction cucumber() 
     pour transformer les fichiers de tests Cucumber en fichiers JavaScript exécutables par Cypress.*/
  }
});
