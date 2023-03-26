const fs = require("fs");
const crypto = require("crypto");

let outputDirectory = "output";
let password = "securePassword";
let fileIndex = 0;

// Create the output directory if it does not exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Generate endless encrypted text files
console.log("Press 'q' to stop the file generator.");
process.stdin.on("data", function(data) {
  if (data.toString().trim().toLowerCase() === "q") {
    console.log("File generator stopped.");
    process.exit();
  }
});

// Continuously generate encrypted text files
(function generateFiles() {
  // Generate a random string
  let randomString = crypto.randomBytes(16).toString("hex");

  // Encrypt the random string with the password
  let cipher = crypto.createCipher("aes-256-cbc", password);
  let encrypted = cipher.update(randomString, "utf8", "hex");
  encrypted += cipher.final("hex");

  // Write the encrypted string to a file
  let fileName = `${outputDirectory}/file-${fileIndex}.enc`;
  fs.writeFile(fileName, encrypted, function(err) {
    if (err) {
      console.error(`Error writing file ${fileName}:`, err);
    } else {
      console.log(`File ${fileName} written with length ${encrypted.length}.`);
      fileIndex++;
      process.title = `Files Generated: ${fileIndex}`;
      generateFiles();
    }
  });
})();
