const readline = require("readline");

async function closeDriverAfterInput(driver) {
  if (!driver) {
    console.warn(
      "Il driver è nullo o non definito. Nessuna azione necessaria."
    );
    return;
  }

  // Attende che l'utente prema Invio
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await new Promise((resolve) =>
    readLine.question("Premi Invio per chiudere il driver: ", () => {
      readLine.close();
      resolve();
    })
  );

  // Chiude il driver
  try {
    await driver.quit();
    console.log("Driver chiuso correttamente.");
  } catch (error) {
    console.error("Errore durante la chiusura del driver:", error);
  }
}

module.exports = { closeDriverAfterInput };
