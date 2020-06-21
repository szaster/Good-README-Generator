const inquirer = require("inquirer");

function welcomeScreen() {
  inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: "Welcome! This application dynamically generates a professional README.md. Press continue to proceed?",
      choices: ["Continue", "Exit"],
    },
  ]);
}

exports.welcomeScreen = welcomeScreen;
