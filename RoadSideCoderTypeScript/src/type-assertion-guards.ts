//Type assertion

let somevalue: unknown = "Subscribe to ragnar";

let strLength: number = (somevalue as string).length;

//or

let strLength2: number = (<string>somevalue).length;

//type guards

function processValue(value: number | string) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

//instance of type guard

class Dog {
  bark() {
    console.log("Bark bark");
  }
}

class Cat {
  meow() {
    console.log("Meow meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
