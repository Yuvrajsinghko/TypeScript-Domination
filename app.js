"use strict";
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
function ab(a, b) {
    console.log("hi");
}
function df(obj) {
    obj.admin = true;
}
//Classes and Objects, Constructors
class Device {
    constructor() {
        this.name = "LG";
        this.price = 120000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
