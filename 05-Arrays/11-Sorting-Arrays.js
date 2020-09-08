// sort(compareFn?: (a: number, b: number) => number): number[]
// Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
// [11,2,22,1].sort((a, b) => a - b)
// Sorts an array.

const numbers = [2, 3, 1];
// Sort method converts each element to a string then sorts the elements within the array
numbers.sort();
console.log(numbers);
// Another method that is companion to the sort method
// Reverse the order of the elements within an array
numbers.reverse();
console.log(numbers);

// For objects, both of those methods work differently
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];
// Sort by the name of courses (JS comes first)
// Sort method takes an optional function parameter for comparison
// The function takes two parameters for first and second, we'll call them a and b
// Function --> if a is less than b, return -1, if a is greater than b, return 1, if equal return 0
courses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
