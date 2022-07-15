const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('every project needs a name... please enter one');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('describe your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions on how to install your application. If not applicable, enter "N/a."',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators or third party assets',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please give credit where creidt is due');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests written for your application. If not applicable, enter "N/a".',
        validate: testsInput => {
            if (testsInput) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'Apache License 2.0',
            'BSD 3-Clause "New"',
            'BSD 2-Clause "Simplified"',
            'GNU GPL v3',
            'GNU LGPL v3',
            'GNU FDLv 1.3',
            'Common Development and Distribution License',
            'Mozilla Public License 2.0',
            'MIT License',
            'Eclipse Public License version 2.0',
            'N/a'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email address.');
                return false;
            }
        }
    },
];

const writeToFile = (fileName, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

function init() {
    return inquirer.prompt(questions);
};

init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(generateMarkdown => {
        return writeToFile('./testMe/README.md', generateMarkdown);
    })
    .catch(err => {
        console.log(err);
    });