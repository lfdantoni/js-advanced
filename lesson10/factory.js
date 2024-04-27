class EmployeeFactory {
  static create(type, hourly) {
    let employee;

    if (type === "fulltime") {
        employee = new FullTime(hourly);
    } else if (type === "parttime") {
        employee = new PartTime(hourly);
    } else if (type === "temporary") {
        employee = new Temporary(hourly);
    } else if (type === "contractor") {
        employee = new Contractor(hourly);
    }

    return employee;
  }
}

class Employee {
  constructor(type, hourly) {
    this.type = type
    this.hourly = hourly
  }

  say = () => {
    console.log(this.type + ": rate $" + this.hourly + "/hour");
  }
}

class FullTime extends Employee {
  constructor(hourly) {
    super('fulltime', hourly)
  }
}

class PartTime extends Employee {
  constructor(hourly) {
    super('parttime', hourly)
  }
}

class Temporary extends Employee {
  constructor(hourly) {
    super('temporary', hourly)
  }
}

class Contractor extends Employee {
  constructor(hourly) {
    super('contractor', hourly)
  }
}

function run() {

  var employees = [];

  employees.push(EmployeeFactory.create("fulltime", 12));
  employees.push(EmployeeFactory.create("parttime", 11));
  employees.push(EmployeeFactory.create("temporary", 10));
  employees.push(EmployeeFactory.create("contractor", 15));

  employees.forEach(employee => employee.say())

}