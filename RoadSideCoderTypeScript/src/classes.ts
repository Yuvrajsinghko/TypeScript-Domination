//Classes in type script

class Person {
  private name: string;
  protected age: number;
  public email: string;

  //constructor

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  public introduce(): string {
    return `Hii i am ${this.name}`;
  }
}

// Shorter syntax with parameter properties
class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let piyush = new Employee(101, "Yuvraj", "Engineering");
console.log(piyush.getDetails());

// Inheritance
class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize} people`;
  }
}
