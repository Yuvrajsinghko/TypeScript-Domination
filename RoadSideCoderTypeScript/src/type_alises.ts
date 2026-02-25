//Type alias

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 56 };

//Type alias for primitives

type ID = string | number;

let userId: ID = 45;
let productId: ID = "45";

//Type alias vs Interfaces

//Interfaces can be extended ,types aliases cannot

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
  color?: string;
}

let MyDog: Dog = {
  name: "bruno",
  breed: "Golden Retriver",
  age: 23,
  weight: 12,
};

//Interfaces can be redeclared multiple times and will merge

interface Animal {
  age: number;
  weight: number;
}

let newDog: Animal = {
  name: "yu",
  age: 44,
  weight: 45,
};
