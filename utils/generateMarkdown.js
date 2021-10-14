// license badges
function renderLicenseBadge(data) {
  if (data == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;

  } else if (data == 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;

  } else if (data == 'GNU 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;

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

  } else if (data == 'GNU 3.0') {
    return `${renderLicenseBadge}(https://www.gnu.org/licenses/gpl-3.0)`;


  } else if (data == 'None') {
    return '';
  }
}


function generateMarkdown(data) {

  let markdownRender = `
  # ${data.title}
  ![License Badge](https://img.shields.io/github/license/${data.github}/${data.repo})
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
  
  ## Questions
  For any questions, please contact me via github or e-mail. 
  GitHub: ${data.github}
  E-mail: ${data.email}
  
  ##Demo


  ## Website 
  Deployed: ${data.deployed}
  Repository: ${data.repo}

`;
  return markdownRender;
}

module.exports = generateMarkdown;
