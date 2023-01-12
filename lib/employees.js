class Employees {
    constructor(first_name, last_name, role, manager) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.role = role;
        this.manager = manager;
    }
    getFirst() {
        return this.first_name;
    }
    getLast() {
        return this.last_name;
    }
    getRole() {
        return this.role;
    }
    getMgr() {
        return this.manager;
    }
}

module.exports = Employees;