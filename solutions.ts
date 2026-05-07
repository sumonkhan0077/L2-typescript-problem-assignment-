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