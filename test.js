const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

async function main() {
  // Create a new instance of the Firefox
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    await driver.get("https://www.alexviolatto.com/");
    //await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 100000);
  } catch (error) {
    console.error(error);
  } finally {
    //await driver.quit();
  }
}

main();
