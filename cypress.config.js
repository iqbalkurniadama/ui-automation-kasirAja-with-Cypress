const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // agar dapat jalan di browser: "chrome" gunakan cara dibawah ini untuk mendapatkan url,
    "chromeWebSecurity": false,
    "chromeWebSecurityRestart": false,
    "chromeWebSecurityCSP": false,
    
    // url
    baseUrl: "https://kasirdemo.belajarqa.com"
  },
});
