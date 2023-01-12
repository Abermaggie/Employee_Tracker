const inquirer = require('inquirer');
const { pid } = require('process');
const Department = require("./Department");

class Roles extends Department {
    constructor(title, role_id, name, salary) {
        super(name);
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