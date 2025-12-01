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
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
//Static Members
class Hero {
    static getRandomNum() {
        return Math.floor(Math.random() * 5) + 1;
    }
}
Hero.version = 1.2;
