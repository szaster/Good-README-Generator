const inquirer = require("inquirer");
const fs = require("fs");

function mustNotBeEmpty(str, fieldName) {
  if (string === "") {
    return `${fieldName} cannot be empty.`;
  }
  return true;
}

function welcomeScreen() {
  return inquirer.prompt([
    {
      type: "list",
      name: "welcome",
      message: "Welcome! This application dynamically generates a professional README.md. Press continue to proceed?",
      choices: ["Continue", "Exit"],
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      validate: (title) => mustNotBeEmpty(title, "Title"),
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
      validate: (description) => mustNotBeEmpty(description, "Description"),
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Press continue to proceed",
      validate: (installation) => mustNotBeEmpty(installation, "Installation"),
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. Include screenshots as needed.Press continue to proceed",
      validate: (usage) => mustNotBeEmpty(usage, "Usage"),
    },
    {
      type: "input",
      name: "credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
      validate: (credits) => mustNotBeEmpty(credits, "Credits"),
    },
  ]);
}

exports.welcomeScreen = welcomeScreen;
