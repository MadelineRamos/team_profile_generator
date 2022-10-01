const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));
const fs = require('fs');

const Manager = require("lib/Manager");
const Engineer = require("lib/Engineer");
const Intern = require("lib/Intern");

function init() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      },
      {
        type: 'loop',
        name: 'team',
        message: 'Add another team member?',
        questions: [
            {
                type: 'list',
                name: 'employeeType',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'What is the employees ID?',
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'What is the employees email address?',
            },
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the employees name?',
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'What is the employees GitHub username?',
                when: (teamMember) => teamMember.employeeType === 'Engineer'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the name of the employees school?',
                when: (teamMember) => teamMember.employeeType === 'Intern'
            }
        ]
      }
    ])
    .then(projectData => {
        var manager = new Manager(projectData.managerName, projectData.id, projectData.email, projectData.officeNumber);
        var engineers = [];
        var interns = [];

        for(let i = 0; projectData.team.length; i++) {
            var teamMember = projectData.team[i];
            if (teamMember.employeeType === 'Engineer') {
                var engineer = new Engineer(teamMember.employeeName, teamMember.employeeId, teamMember.employeeEmail, teamMember.githubUsername);
                engineers.push(engineer);
            } else if (teamMember.employeeType === 'Intern') {
                var intern = new Intern(teamMember.employeeName, teamMember.employeeId, teamMember.employeeEmail, teamMember.internSchool);
                interns.push(intern);
            }
        }

        var managerCard = generateManagerCard(manager);
        var engineersCard = generateEngineersCard(engineers);
        var internsCard = generateInternsCard(interns);
        var html = generateHtml(managerCard, engineersCard, internsCard);

        writeToFile(html);
    })
}

function writeToFile(html) {
    fs.writeFile('index.html', html, function (err) {
        if (err) throw err;
        console.log('Generating Team Members...');
    });
}

init();
