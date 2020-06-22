const questionnaire = require("./sections/questionnaire");
const readme = require("./utils/generateMarkdown");
const fs = require("fs");
const filename = "Readme-user.md";

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    process.exit(1);
    console.log("The file has been saved!");
  });
}

// function to initialize program
function init() {
  questionnaire
    .welcomeScreen()
    .then((data) => {
      if (data.welcome === "Exit") {
        process.exit(0);
      }
    })
    .then(() => questionnaire.collectData())
    .then((data) => readme.generateMarkdown(data))
    .then((readme) => writeToFile(filename, readme));
}

// function call to initialize program
init();
