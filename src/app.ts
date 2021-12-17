class Department {
  // private functions similarly to other OOP languages - can also be added to methods as well
  private employees: string[] = [];
  constructor(private id: string, public name: string) {
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
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