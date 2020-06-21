const questionnaire = require("./sections/questionnaire");
const readme = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// function to initialize program
function init() {
  questionnaire
    .collectData()
    .then((data) => readme.generateMarkdown(data))
    .then((readme) => writeToFile("Readme-generated.md", readme));
}

// function call to initialize program
init();
