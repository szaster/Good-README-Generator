const inquirer = require("inquirer");

function mustNotBeEmpty(str, fieldName) {
  if (str === "") {
    return `${fieldName} cannot be empty.`;
  }
  return true;
}

function collectData() {
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
    // {
    //   type: "editor",
    //   name: "installation",
    //   message:
    //     "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Press continue to proceed",
    //   validate: (installation) => mustNotBeEmpty(installation, "Installation"),
    // },
    // {
    //   type: "editor",
    //   name: "usage",
    //   message: "Provide instructions and examples for use. Include screenshots as needed.",
    //   validate: (usage) => mustNotBeEmpty(usage, "Usage"),
    // },
    // {
    //   type: "editor",
    //   name: "credits",
    //   message:
    //     "List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
    //   validate: (credits) => mustNotBeEmpty(credits, "Credits"),
    // },
    {
      type: "list",
      name: "license",
      message: "Choose a license. If you need help choosing a license, use (https://choosealicense.com/)",
      choices: ["MIT license", "GNU General Public License v3.0", "Apache License 2.0"],
    },
  ]);
}

module.exports = { collectData: collectData };
