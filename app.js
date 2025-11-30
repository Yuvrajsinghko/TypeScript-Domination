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
//Access Modifiers:Public,Private,Protected
class Tuna {
    constructor(name) {
        this.name = name;
    }
}
class TunaMeta extends Tuna {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
let b1 = new TunaMeta("hella");
b1.getValue();
// b1.name='Hum hum'
