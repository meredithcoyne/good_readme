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
  ![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)
  ## Description
  --------------
  ${data.description}
  ## Table of Contents
  --------------
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#tests)
  - [Questions](#questions)
  
  ## Installation
  --------------
  ${data.installation}

  ## Usage
  --------------
  ${data.usage}

  ## License
  --------------
  This application is licensed under ${data.license}.
  
  Copyright 2021 Meredith Coyne

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTI

  ## Contribution
  --------------
  ${data.contribution}

  ## Test
  ${data.test}
  ---
  
  ## Questions
  --------------
  For any questions, please contact me via github or e-mail. 

  * Checkout my [GitHub profile](https://github.com/${data.github})
  
  * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 
  
  ## Demo
  --------------
  [videoName](videoname.mp4)

  ## Website 
  Deployed: ${data.deployed}
  Repository: ${data.repository}

`;
  return markdownRender;
}

module.exports = generateMarkdown;