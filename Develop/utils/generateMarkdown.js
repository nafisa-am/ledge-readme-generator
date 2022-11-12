//  A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseBadge;
  switch (license) {
    case "MIT":
      licenseBadge = "https://img.shields.io/apm/l/vim-mode";
      break;
    case "APACHE_2.0":
      licenseBadge = "https://img.shields.io/crates/l/rustc-serialize/0.3.24";
      break;
    case "GPL_3.0":
      licenseBadge =
        "https://img.shields.io/eclipse-marketplace/l/notepad4e?label=GPL%203.0";
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
    case "MIT":
      licenseLink = "\nFind out more on: https://opensource.org/licenses/MIT";
      break;
    case "APACHE_2.0":
      licenseLink =
        "\nFind out more on: https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "GNU GPLv3.0":
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
    return data.license;
  }
};
//  A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${renderLicenseSection(data.license)} license](${renderLicenseBadge(
    data.License
  )})
  ## Description
  ${data.Description}
  ## Usage :
  ${data.Usage}
  ## License : 
  ${data.License}

 ${renderLicenseSection(data.license)} license
 ${renderLicenseLink(data.license)}

  ## Contributions ;
  ${data.Contributions}
  ## Tests
  ${data.Tests}
  ## Questions
  If you have any questions about this project or you would like to contribute, then please feel free to contact me on ${
    data.email
  }. 
  This repo can be view at https://github.com/${data.Github}
  ## GitHub ; 
  ${data.Github}
  ## email : 
  ${data.email}
`;
}

module.exports = generateMarkdown;
