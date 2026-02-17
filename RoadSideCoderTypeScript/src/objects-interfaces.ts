//Object type Annotation
//interface

interface User {
  name: string;
  age: number;
  email?: string;
  //   readonly id: number;
}

let user: User = {
  name: "yu",
  age: 45,
  // email:'yub',
  //   id: 1,
};

//Interfaces with methods
interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

let laptop: Product = {
  name: "Lenovo",
  price: 450000,
  getDiscount(percentage: number): number {
    return Math.floor(this.price * (percentage / 100));
  },
};

