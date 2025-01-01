const chrome = require("selenium-webdriver/chrome");

let options = new chrome.Options();
options.addArguments("--log-level=3"); // Riduce i log di Chrome
options.addArguments("--disable-logging");
options.setLoggingPrefs({ browser: "OFF", driver: "OFF" });

module.exports = options;
