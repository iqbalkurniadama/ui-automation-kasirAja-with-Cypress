const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // mochawesome reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // agar dapat jalan di browser: "chrome" gunakan cara dibawah ini untuk mendapatkan url,
    "chromeWebSecurity": false,
    "chromeWebSecurityRestart": false,
    "chromeWebSecurityCSP": false,
    
    // url
    baseUrl: "https://kasirdemo.belajarqa.com",

    // mochawesome report options
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  

});
