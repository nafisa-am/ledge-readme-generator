// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const newSetupquestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is your project description?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose from the following licenses:",
    choices: [
      "Apache license 2.0",
      "MIT License",
      "GNU General Public License v3.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {}

// A function to initialize app
function init() {}

// Function call to initialize app
init();
