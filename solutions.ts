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
 

//------------problem 5:------------//

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
 toggleReadStatus(myBook);

// --------------problem 6:-----------//
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();


// --------------problem 7:-----------//

 function getIntersection(arr1: number[], arr2: number[]): number[] {
  return [...new Set(arr1.filter((number) => arr2.includes(number)))];
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);