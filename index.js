// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
function init() {
    const questions = inquirer.prompt([
        {
            type: 'input',
            name: 'Username',
            message: 'What is your Github username or name you want on the readme?',
        },
        {
            type: 'input',
            name: 'Project',
            message: 'What is the Name of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please decribe your project?',
        },
        {
            type: 'input',
            name: 'Install',
            message: 'How would I install you project?',
        },
        {
            type: 'input',
            name: 'Use',
            message: 'How would I use your project?',
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'How can I contribute to your project?',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'How can I test your project?',
        },
        {
            type: 'list',
            name: 'License',
            message: 'What license(s) does this project have?',
            choices: 
            [
                "MIT",
                "Apachev2",
                "GPLv3",
                "BSDv3",
                'None',
            ]
        },
    ]).then(answers => {
    
        const file = 'ReadMe.md'
        const fileString = generateMarkdown(answers)
        console.log(fileString);

        fs.writeFile(file, fileString, function (err) {
        if (err) console.error(err)     
        })
    });

};

init();
