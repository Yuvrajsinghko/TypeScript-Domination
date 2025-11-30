"use strict";
// let b: number[] = [4, 5, 6];
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
class bottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
//this keyword in Classes
class boom {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(this.name);
    }
}
