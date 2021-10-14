// license badges
function renderLicenseBadge(data) {
  if (data == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;

  } else if (data == 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;

  } else if (data == 'GPL 3.0') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]`;

  } else if (data == 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;

  } else if (data == 'None') {
    return '';
  }
}


// license links
function renderLicenseLink(data) {
  if (data == 'MIT') {
    return `${renderLicenseBadge}(https://opensource.org/licenses/MIT)`;

  } else if (data == 'APACHE 2.0') {
    return `${renderLicenseBadge}(https://opensource.org/licenses/Apache-2.0)`;

  } else if (data == 'GPL 3.0') {
    return `${renderLicenseBadge}(https://www.gnu.org/licenses/gpl-3.0)`;

  } else if (data == 'BSD 3') {
    return `${renderLicenseBadge}(https://opensource.org/licenses/BSD-3-Clause)`;

  } else if (data == 'None') {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(data) {
  renderLicenseLink();
  if (data === '') {
    return '';
  }
}

function generateMarkdown(data) {

  let markdownRender = `
  # ${data.title}
  ![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license.split(' ').join('-')}&color=success)
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#tests)
  - [Questions](#questions)
  
  ## Installation
  Run the following commands for project to:

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under ${data.license}.

  ## Contribution
  ${data.contribution}
  
  ## Testing
  ${data.test}
  ---
  
  ## Questions?
  For any questions, please contact me via github or e-mail. 
  GitHub: ${data.github}
  E-mail: ${data.email}
  
`;
  return markdownRender;
}

module.exports = generateMarkdown;
