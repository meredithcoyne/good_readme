const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
// const emailValidator = require('email-validator');
const generateMarkdown = require('./utils/generateMarkdown');

//questions to fill out README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
       
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project about?  GIve a detailed description of your project.',
        
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this app?',
        
       
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the app used?',
        
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is being used?)',
        choices: ['MIT', 'GNU', 'Apache'],
    },
    {
        type: 'list',
        name: 'contribution',
        message: 'Who contributed to the project?',
       
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands are needed to test this app?',
       
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
       
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    
    }
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};

// function initializes program
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
};



//Function call to initialize app
init();