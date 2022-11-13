//  A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseBadge;
  switch (license) {
    case "Apache license 2.0":
      licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case "MIT":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "GNU General Public license v3.0":
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "None":
      licenseBadge = "";
      break;
  }
};
// Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseLink;
  switch (license) {
    case "Apache license 2.0":
      licenseLink =
        "\nFind out more on: https://opensource.org/licenses/Apache-2.0";
      break;
    case "MIT":
      licenseLink = "\nFind out more on: https://opensource.org/licenses/MIT";
      break;
    case "GNU General Public license v3.0":
      licenseLink =
        "\nFind out more on: https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseLink;
};

//  A function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return "No";
  } else {
    return license;
  }
};

//  A function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title}
  
  ![${renderLicenseSection(data.license)} license](${renderLicenseBadge(
    data.license
  )})

  ## Table of Contents
  * [Description](#Description)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributions](#Contributions)
  * [Tests](#Test)
  * [Questions](#Questions)
  
  
  ## Description:
  ${data.Description}

  ## Usage :
  ${data.Usage}
  
  ## License : 
  ${data.license}

 ${renderLicenseLink(data.license)}

  ## Contributions: 
  ${data.Contributions}
  ${data.Additions}

   ## Tests:
  ${data.Tests}

  ## Questions:
  If you have any questions about this project or you would like to contribute, then please feel free to contact me on ${
    data.email
  }.
  This repo can be viewed at https://github.com/${data.GitHub}
`;
};

module.exports = generateMarkdown;
