"use strict";
const driver = require("./config/open_driver");
const { closeDriverAfterInput } = require("./config/close_driver");
const dotenv = require("dotenv").config();

async function main() {
  try {
    await driver.get(process.env.URL_PAGE);
    console.log("Pagina caricata.");
    // Click on the button to remove the cookie banner from the page (Reject kookie)
    await driver.findElement({ id: "W0wltc" }).click();
    // Set the page in fullscreen
    await driver.manage().window().maximize();
  } catch (error) {
    console.error("Errore durante l'esecuzione dello script:", error);
  } finally {
    await closeDriverAfterInput(driver); // Close the driver
  }
}

main();
