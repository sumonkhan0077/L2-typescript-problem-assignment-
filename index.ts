//hello 

// Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Sample Output:
// [2, 4, 6]


function reverseString(text: string): string {
  return text.split("").reverse().join("");
}
const rev= reverseString("typescript");
console.log(rev)