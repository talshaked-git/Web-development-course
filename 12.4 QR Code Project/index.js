import qr from "qr-image"
import inquirer from "inquirer"
import fs from "fs"
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


inquirer
  .prompt([{
    message: "Please enter a URL: ", 
    name: "URL"
    }])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('url.png'));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });