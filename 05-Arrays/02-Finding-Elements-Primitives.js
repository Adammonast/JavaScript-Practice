// Finding elements depends on if we are storing primitive or reference types in an array
// Primitives:
const numbers = [1, 2, 3, 1, 4];
// indexOf() - pass in the element that we are looking for
// If that element exists within the array, the index will be returned
// If it doesn't exists, it will return -1
// Type of value being passed matters ("1") --> returns -1 as it is a string
console.log("Index Of: ", numbers.indexOf(3));
// additional parameters can be passed in to signify where to start the search
// starts at index 2
console.log("Index Of with Index: ", numbers.indexOf(1, 2));
// lastIndexOf() - pass in an element and it returns the index of that value's last occurence
console.log("Last Index Of: ", numbers.lastIndexOf(1));

// includes() - checks if a value exists within an array
// checks the value against an index within an array
// returns true or false
console.log("Includes: ", numbers.includes(1));
console.log("Includes: ", numbers.includes(5));
