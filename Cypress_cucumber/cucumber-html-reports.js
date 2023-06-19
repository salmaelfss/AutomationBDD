
const report = require("multiple-cucumber-html-reporter")

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-html-report.html",
    metadata: {
        browser: {
            name: "chrome"
        },
        device: "local Test Machine",
        platform: {
            name: "windows",
            version: "10"

        }
    }
})

//npm install multiple-cucumber-html-reporter --save-dev
//node cucumber-html-reports.js