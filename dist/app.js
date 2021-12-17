"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private functions similarly to other OOP languages - can also be added to methods as well
        this.employees = [];
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();
