// let b: number[] = [4, 5, 6];

// //tuple
// //fixed type and length
// let c: [number, string, boolean] = [12, "yuvraj", true];

// //ENUMS
// enum UserRoles {
//   ADMIN = "admin",
//   GUEST = "guest",
//   SUPER_ADMIN = "super-admin",
// }
// //Any,Unknown,Void,Null,Undefined,Never

// let a;
// let e: unknown;
// e = 12;
// e = "yuvraj";
// e = true;

// function abcd(): void {
//   console.log("hii");
// }
// function acd(): number {
//   return 45;
// }
// //type Inference

// let t = 44.5;
// // Type Annotations

// let bo: number | boolean | string;
// bo = 45.2;
// bo = "ty";
// bo = false;

//Interfaces and Type Aliases

// function ab(a: number, b: string) {
//   console.log("hi");
// }
// interface User{
//     name:string,
//     email:string,
//     password:string,
//     gender?:string
// }

// // let atc:User={}
// function getUserData(obj:User){

// }

// getUserData({name:"yu",email:'ff',password:'fd',gender:'male'})

//Extending Interfaces
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

interface Admin extends User {
  admin: boolean;
}

function df(obj: Admin) {
  obj.admin = true;
}

//Type Aliases

// type sankhya = number;

// let a:sankhya;

// type value=string | number|boolean;

// let m:value;
// m='44'
// m=true
// m=455

//Union And Intersection types

type overUser = {
  name: string;
  email: string;
};

type admin = User & {
  getDetails(user: string): void;
};

//Classes and Objects, Constructors
class Device {
  name = "LG";
  price = 120000;
  category = "digital";
}

class bottleMaker {
  constructor(public name: string, public price: number) {}
}

//this keyword in Classes

class boom {
  constructor(public name: string) {}
  logName() {
    console.log(this.name);
  }
}

//Access Modifiers:Public,Private,Protected

class Tuna {
  constructor(public name: string) {}
}

class TunaMeta extends Tuna {
  constructor(name: string) {
    super(name);
  }

  getValue() {
    console.log(this.name);
  }
}

let b1 = new TunaMeta("hella");

// b1.name='Hum hum'

//Readonly Properties:when we don't want to change something it will be constant throughout the class than we use readonly keyword

// class Neon {
//   constructor(public readonly name: string) {}
//   changeName() {
//     console.log(this.name);

//   }
// }
// let f1 = new Neon("Yuvraj");
// f1.changeName();

// class Neo {
//   constructor(public name: string, public age: number, public gender?: string) {
//     if (!this.gender) {
//       console.log("Not mentioned");
//     } else {
//       console.log(this.gender);
//     }
//   }
//   logData() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// let g1 = new Neo("Yuv", 24);
// g1.logData();
// let g2 = new Neo("Yff", 23, "male");
// g2.logData();

//getters and setters

class Bexi {
  constructor(public _name: string, public age: number) {}

  get name(){
    return this._name
  }
  set name(value:string){
    this._name=value
  }
}

//Static Members

class Hero{
  static version = 1.2;

  static getRandomNum(){
    return Math.floor(Math.random()*5)
  }
}
