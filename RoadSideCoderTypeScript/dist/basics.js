"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let msg = "Hello Yuvraj";
console.log(msg);
//Primitives
let username = "Yuvraj";
let age = 27;
let isAdmin = true;
//Arrays
let number = [4, 5, 6, 3, 2];
let names = ["a", "b", "c"];
let person = ["Piyush", 25];
//Enum(Specific type of values only)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let favouriteColor = Color.Green;
//Any (avoid when possible)
let randomValue = 10;
randomValue = "ki";
randomValue = true;
//Unknown (safer then any)
let userInput;
userInput = 5;
userInput = "Yuv";
//Functions in TypeScript
//Void
function subscribe(message) {
    console.log(message);
}
//Null and Undefined
let nullValue;
let undefinedValue;
