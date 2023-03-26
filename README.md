# Endless Text File Generator and Decrypter

This repository contains two JavaScript scripts for generating endless encrypted text files with random strings and for opening the encrypted files and displaying the original text.

## File Generator

The file generator script `index.js` creates endless encrypted text files with random strings and saves them in the `output` directory. The files are encrypted with the AES-256-CBC algorithm and a password of `securePassword`. The program continues to generate files until it is manually stopped by the user by entering `q` at the command line. The number of generated files is displayed in the window title.

## File Decrypter

The file decrypter script `decrypter.js` opens an encrypted file with the name `output/file-0.enc` and decrypts the contents with the same password as the file generator. The original text is then displayed on the console.

## Usage

To use these scripts, you must have [Node.js](https://nodejs.org/en/) installed on your computer. Then, follow these steps:

1. Clone or download this repository.
2. Open the command line and navigate to the repository directory.
3. Run the command `npm install` to install the necessary dependencies.
4. Run the command `npm start` to start the file generator.
5. To stop the file generator, enter `q` at the command line.
6. To open an encrypted file, run the command `npm run decrypt`.

Note: The password is stored in plain text in the scripts for demonstration purposes. In practice, you should use a secure method for storing the password, such as prompting for user input.
