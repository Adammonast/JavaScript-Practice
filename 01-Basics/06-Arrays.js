// Arrays are a data structure that can store a list of multiple values
// arrays use brackets
// brackets are array literals, indicate an empty array
// syntax ---> [value, value, value]
// primitive type rules apply to array values (strings need quotes, etc)
let selectedColors = ["red", "blue"];
console.log("Array: ", selectedColors);

// each element has an index within the array
// indexes start with the first item as 0
// use bracket notation to target single elements
console.log("Bracket Notation: ", selectedColors[0]);

// can modify array values as well as the array itself
// use bracket notation
selectedColors[2] = "green";
console.log("Modify: ", selectedColors);

// can store different types within array
selectedColors[3] = 1;
selectedColors[4] = true;
selectedColors[5] = [1, 2, 3];
console.log("Different types: ", selectedColors);

// arrays have various methods/operations
// .length returns the length of an array
console.log("Length: ", selectedColors.length);
