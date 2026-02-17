let msg: string = "Hello Yuvraj";
console.log(msg);

//Primitives
let username: string = "Yuvraj";
let age: number = 27;
let isAdmin = true;

//Arrays
let number: number[] = [4, 5, 6, 3, 2];
let names: string[] = ["a", "b", "c"];
let person: [string, number] = ["Piyush", 25];

//Enum(Specific type of values only)

enum Color {
  Red,
  Blue,
  Green,
}

let favouriteColor: Color = Color.Green;

//Any (avoid when possible)

let randomValue: any = 10;

randomValue = "ki";
randomValue = true;

//Unknown (safer then any)

let userInput: unknown;
userInput = 5;
userInput = "Yuv";

//Functions in TypeScript

//Void
function subscribe(message: string): void {
  console.log(message);
}

//Null and Undefined

let nullValue: null;
let undefinedValue: undefined;
