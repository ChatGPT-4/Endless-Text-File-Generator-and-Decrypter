const fs = require("fs");
const crypto = require("crypto");

let fileName = "output/file-0.enc";
let password = "securePassword"; // Passwort zum Entschlüsseln der Datei

fs.readFile(fileName, function(err, data) {
  if (err) {
    console.error(`Fehler beim Lesen der verschlüsselten Datei ${fileName}:`, err);
  } else {
    // Entschlüsselung des Textes mit dem Passwort
    let decipher = crypto.createDecipher("aes-256-cbc", password);
    let decrypted = Buffer.concat([decipher.update(data), decipher.final()]);

    console.log(`Der originalen Text in der Datei ${fileName} lautet:`, decrypted.toString());
  }
});
