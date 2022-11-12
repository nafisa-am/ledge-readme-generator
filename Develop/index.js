// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const newSetupQuestions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the purpose of this project?",
  },
  {
    type: "list",
    name: "License",
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
    validate: function (value) {
      let accept = value.match(
        /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      );
      if (accept) {
        return true;
      }
      return "Email address is not valid, please enter a valid email address!";
    },
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your Github username",
  },
  {
    type: "confirm",
    name: "Contributing",
    message: `Are you adding additional contributions to this project?`,
  },
  {
    type: "input",
    name: "Additions",
    message: `Please state your additions.`,
  },
  {
    type: "confirm",
    name: "Tests",
    message: `Would you like to run any tests?`,
  },
];

// Function to write README file
const writeToFile = (fileName, data) => {};
const errorHandling = (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("README file successfully generated.");
  }

  fs.writeToFile(fileName, data, errorHandling);
};

// A function to initialize app
const init = async () => {
  try {
    const data = await inquirer.prompt(newSetupQuestions);
    writeToFile("./output/README.md", generateMarkdown(data));
  } catch (err) {
    console.log(err);
  }
};

// Function call to initialize app
init();
