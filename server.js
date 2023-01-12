const express = require('express');
const mysql = require('mysql12');
const inquirer = require('inquirer');
const Department = require('./lib/department');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: flase}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Rog&Will2020',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const deptList = [];
const deptId= [];
const empId= [];



function appMenu() {
    console.log("Welcome to your employee directory!")
    inquirer
        .createPromptModule([
            {
                type: 'list',
                name: 'direction',
                message: "Please choose an option below:",
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
            },
        ])
        .then((userChoice) => {
            switch(userChoice.direction) {
                case 'View all Departments':
                    console.log('function for dept.')
                    break;
                case 'View all Roles':
                    console.log('function for roles')
                    break;
                case 'View all Employees':
                    console.log('view empl')
                    break;
                case 'Add a Department':
                    console.log('add dept')
                    break;
                case 'Add a Role':
                    console.log('add role')
                    break;
                case 'Add an Employee':
                    console.log('add Employee')
                    break;
                case 'Update an Employee Role':
                    console.log('update emp')
                    break;
                default:
                    console.log('pull directory');
            }
        })
};

function addDept() {
    console.log("Please enter department information.");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'deptName',
                message: "What is the name of the department you would like to add?"
            }
        ])
        .then((answers) => {
            const department = new Department(
                answers.deptName,
            );

        })
}

app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});