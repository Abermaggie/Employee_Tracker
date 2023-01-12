const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const Department = require('./lib/department');
const Roles = require('./lib/roles');
const Employee = require('./lib/employees');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
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

const getDept = () => {db.query('SELECT * FROM department', function (err,results) {
    console.table(results);
    appMenu();
});
}
const getRole = () => {db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    appMenu();
})
};

const getEmp = () => {db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    appMenu();
})
};

const deptList = [];
const roleList= [];
const empList= [];



function appMenu() {
    console.log("Welcome to your employee directory!")
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'direction',
                message: "Please choose an option below:",
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
            }
        ])
        .then((userChoice) => {
            switch(userChoice.direction) {
                case 'View all Departments':
                    getDept()
                    break;
                case 'View all Roles':
                    getRole();
                    break;
                case 'View all Employees':
                    getEmp();
                    break;
                case 'Add a Department':
                    addDept()
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmp();
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
                name: 'deptId',
                message: "What is the ID of the department you would like to add?"
            },
            {
                type: 'input',
                name: 'deptName',
                message: "What is the name of the department you would like to add?"
            }
        ])
        .then((answers) => {
            const department = new Department(
                answers.deptId,
                answers.deptName,
            );
            deptList.push(department);
            getDept();
        })
}

function addRole() {
    console.log("Please enter role information.");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: "What is the name of the role you would like to add?"
            },
            {
                type: 'input',
                name: 'roleId',
                message: "What is the ID # of this role?"
            },
            {
                type: 'input',
                name: 'roleSal',
                message: "What is the minimum salary of this role?"
            },
            {
                type: 'input',
                name: 'roleDept',
                message: "What is the name of the department this role will be added to?"
            }
        ])
        .then((answers) => {
            const roles = new Roles(
                answers.roleId,
                answers.roleName,
                answers.roleDept,
                answers.roleSal
            );
            roleList.push(roles);
            getRole();
        })
    }

function addEmp() {
    console.log("Please enter your new employee's information.");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'empFName',
                message: "What is the first name of the new Employee?"
            },
            {
                type: 'input',
                name: 'empLName',
                message: "What is the last name of the new Employee?"
            },
            {
                type: 'input',
                name: 'empRole',
                message: "What is the role of the new Employee?"
            },
            {
                type: 'input',
                name: 'empMgr',
                message: "Who is this employee's direct Manager?"
            }
        ])
        .then((answers) => {
            const employee = new Employee (
                answers.empFName,
                answers.empLName,
                answers.empRole,
                answers.empMgr
            );
            empList.push(employee);
            getRole();
        })
    };
appMenu();

app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });