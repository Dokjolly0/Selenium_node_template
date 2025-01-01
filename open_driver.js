const { Builder } = require("selenium-webdriver");
const options = require("./option_driver");

driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();

module.exports = driver;
