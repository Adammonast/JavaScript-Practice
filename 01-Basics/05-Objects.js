// Reference types include: objects, arrays, functions
// Objects are a data structure that can hold multiple related variables

let name = "Adam";
let age = "23";

// instead of using two seperate related variables, declare a "person" that contains both variables
// curly braces are object literals
// within the braces declare the object's properties
// known as key value pairs
// syntax --> key: value,
// seperate each key: value with a comma
let person = {
  name: "Adam",
  age: 23,
};

console.log("This is name: ", name);
console.log("This is age: ", age);
console.log("This is the object: ", person);

// can change object properties using dot notation/bracket notation

// dot notation
person.name = "John";
// can log individual properties using dot notation as well
console.log("This is dot notation: ", person.name);

// bracket notation
// within brackets, pass in a string referencing the targeted property
person["name"] = "Jane";
// can can log individual properties using dot notation as well
console.log("This is bracket notation: ", person["name"]);
// can also access properties by referencing variables (used if a variable is not constant/changing)
let selection = "name";
person[selection] = "Bruce";
console.log("This is bracket notation w/ variable: ", person.name);
