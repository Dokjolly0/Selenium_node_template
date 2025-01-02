const { Builder } = require("selenium-webdriver");
const options = require("./option_driver");
const dotenv = require("dotenv").config();

const browser = process.env.BROWSER || "chrome";
driver = new Builder().forBrowser(browser).setChromeOptions(options).build();

module.exports = driver;
