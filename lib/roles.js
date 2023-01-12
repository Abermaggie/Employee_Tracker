const inquirer = require('inquirer');
const { pid } = require('process');
const Department = require("./Department");

class Roles {
    constructor(title, role_id, dpt, salary) {
        this.dpt = dpt;
        this.title = title;
        this.id = role_id;
        this.salary = salary;
    }
    getTitle() {
        return this.title;
    }

    getId() {
        return this.id;
    }
    
    getSalary() {
        return this.salary;
    }
    
    getRole() {
        return "Roles";
    }
}

module.exports = Roles;