const { getSystemErrorName } = require("util");

class department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
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

module.exports = department;