const fs = require("fs");
const crypto = require("crypto");

let count = 0; // Zähler für die Anzahl der erstellten Dateien
let password = "securePassword"; // Passwort zum Verschlüsseln der Dateien

// Überprüfe, ob der Ordner "output" bereits vorhanden ist
if (!fs.existsSync("output")) {
  fs.mkdirSync("output");
}

// Funktion zum Erstellen einer neuen verschlüsselten Datei
function createEncryptedFile() {
  let fileName = `output/file-${count}.enc`;
  let randomString = crypto.randomBytes(100).toString("hex");

  // Verschlüsselung des Textes mit dem Passwort
  let cipher = crypto.createCipher("aes-256-cbc", password);
  let encrypted = Buffer.concat([cipher.update(randomString), cipher.final()]);

  fs.writeFile(fileName, encrypted, function(err) {
    if (err) {
      console.error(`Fehler beim Schreiben der verschlüsselten Datei ${fileName}:`, err);
    } else {
      console.log(`Verschlüsselte Datei ${fileName} erfolgreich erstellt.`);
      count++;
      createEncryptedFile();
    }
  });
}

// Starte die Funktion zum Erstellen von verschlüsselten Dateien
createEncryptedFile();

// Beende das Programm, wenn der Benutzer "q" eingibt
process.stdin.setEncoding("utf8");
process.stdin.on("readable", function() {
  let chunk = process.stdin.read();
  if (chunk != null) {
    chunk = chunk.trim();
    if (chunk === "q") {
      console.log("Programm wurde manuell gestoppt.");
      process.exit();
    }
  }
});
