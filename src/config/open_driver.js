const { Builder } = require("selenium-webdriver");
const options = require("./option_driver");
const dotenv = require("dotenv").config();

const browser = process.env.BROWSER || "chrome";
driver = new Builder()
  .forBrowser(browser)
  .setChromeOptions(browser === "chrome" ? options : undefined)
  .setFirefoxOptions(browser === "firefox" ? options : undefined)
  .setEdgeOptions(browser === "edge" ? options : undefined)
  .setSafariOptions(browser === "safari" ? options : undefined)
  .setOperaOptions(browser === "opera" ? options : undefined)
  .setIEOptions(browser === "ie" ? options : undefined) // Internet Explorer
  .setChromiumOptions(browser === "chromium" ? options : undefined)
  .build();

module.exports = driver;
