const { getSystemErrorName } = require("util");

class Department {
    constructor(id, dept) {
        this.id = id;
        this.name = dept;
    }
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "department";
    }
}

module.exports = Department;