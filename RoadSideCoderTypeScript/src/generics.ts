function identity<T>(arg: T): T {
  return arg;
}

let outPut1 = identity<string>("Ragnar");
let outPut2 = identity<number>(100);
console.log(outPut1, outPut2);

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let first = getFirstElement([4, 5, 6, 2, 3]);
let second = getFirstElement(["ht", "gh"]);
console.log(first, second);

//generic interfaces

interface KeyValuePair<k, v> {
  key: k;
  value: v;
}

let stringNumberPair:KeyValuePair <string,number>={
    key:"Yuvraj",
    value:25
}
