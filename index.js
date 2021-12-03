const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//questions to fill out README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
       
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the project about?  Give a detailed description of your project.'
        
    },
 
       
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this app?'
        
       
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is the app used?'
        
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is being used? (MIT,  GNU, or Apache)',
        choices: ['MIT', 'GNU', 'Apache']
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the project?'
       
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What commands are needed to test this app?'
       
    },

    {
        type: 'input',
        name: 'deployed',
        message: 'What is the Deployed Link?'
       
    },

    {
        type: 'input',
        name: 'repository',
        message: 'What is the Repository Link?'
       
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
       
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    
    }
];



// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }





// function initializes program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Success! Your README file has been created.')
            writeToFile('README.md', generateMarkdown({ ...answers }));
        });
      }
  


//Function call to initialize app
init();