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

function ab(a: number, b: string) {
  console.log("hi");
}
// interface User{
//     name:string,
//     email:string,
//     password:string,
//     gender?:string
// }
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


type admin =User & {
  getDetails(user:string):void
};


//Classes and Objects, Constructors
class Device{
    name="LG"
    price=120000
    category="digital"
}

let d1=new Device();


let d2= new Device();