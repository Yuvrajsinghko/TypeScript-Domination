//Basic function in ts

function add(a: number, b: number) {
  return a + b;
}

//Optional Parameters

function greet(name: string, greetings?: string) {
  if (greetings) {
    return `${greetings} ${name}`;
  }
  return `Hello ${name}`;
}

console.log(greet("yuv"));


//Rest parameters

function sum(...numbers:number[]):number{
    return numbers.reduce((total,n)=>total+n,0);

}
console.log(sum(1,2,5,6,3));


