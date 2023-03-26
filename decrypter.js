const fs = require("fs");
const crypto = require("crypto");

let fileName = "output/file-0.enc";
let password = "securePassword";

fs.readFile(fileName, function(err, data) {
  if (err) {
    console.error(`Error reading file ${fileName}:`, err);
    process.exit();
  }

  // Decrypt the contents of the file
  let decipher = crypto.createDecipher("aes-256-cbc", password);
  let decrypted = decipher.update(data.toString(), "hex", "utf8");
  decrypted += decipher.final("utf8");

  // Display the original text
  console.log(`Original text: ${decrypted}`);
});
