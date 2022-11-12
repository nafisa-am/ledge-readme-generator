//  A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

//  A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//  A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//  A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
