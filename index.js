const fs = require('fs');
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
        message: 'What is the project about?  GIve a detailed description of your project.'
        
    },
 
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success! Your README file has been created.')

)}


// function initializes program
function init() {
    inquirer   
        .prompt(questions).then((answers) => {
            writeToFile('README.md', answers)
        })
}



//Function call to initialize app
init();