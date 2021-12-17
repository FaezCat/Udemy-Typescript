class Department {
  // private functions similarly to other OOP languages - can also be added to methods as well
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);