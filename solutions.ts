//------------ Problem 1:-----------//
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}
  filterEvenNumbers([1, 2, 3, 4, 5, 6, 5, ]);


 //------------ Problem 2:-----------//
 function reverseString(text: string): string {
  return text.split("").reverse().join("");
}
  reverseString("typescript");


 //------------ Problem 3:-----------//
  type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}

checkType("343");


 //------------ Problem 4:-----------//

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};
    getProperty(user, "name");