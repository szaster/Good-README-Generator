const questionnaire = require("./sections/questionnaire");
const readme = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  console.log(data);
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
