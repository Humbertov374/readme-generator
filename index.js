const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./lib/generate-markdown');
const licenseInfo = require('./lib/license-data').licenseInfo;

const questions = [
    
    {
        name: 'title',
        message: 'Enter the title of your README:'
    },
    {
        name: 'description',
        message: 'Enter the description of your README:',
    },
    {
        name: 'installation',
        message: 'Enter installation details:'
    },
    {
        name: 'usage',
        message: 'Enter app usage details:'
    },
    {
        name: 'contributions',
        message: 'Enter contribution details:'
    },
    {
        name: 'tests',
        message: 'Enter information about tests:'
    },
    {
        name: 'githubName',
        message: 'Enter GitHub name:'
    },
    {
        name: 'email',
        message: 'Enter your email:'
    },

    {
        type: 'list',
        name: 'licenseType',
        message: 'Choose a lisence:',
        choices: licenseInfo,
    },
    
];


const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README has been generated in \'README.md\' file');
    });
}


const init = () => {
    inquirer
        .prompt(questions) 
        .then(readmeData => generateMarkdown(readmeData))
        .then(markdownData => writeToFile('README.md', markdownData))
}

init();
