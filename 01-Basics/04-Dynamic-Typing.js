// JavaScript is a dynamic language
// Static language - when a variable is declared, that variable type can NOT be changed
// Dynamic language - Type of a variable can change at runtime

let name = "Adam";
let age = 23;
let isApproved = true;
let firstName = undefined;
let lastName = null;

// type of variable is determined at runtime based on the value assigned to them
name = 4;
console.log(name); // returns 4

// use typeof operator in terminal to check types
console.log(typeof name); // returns number
console.log(typeof isApproved); // returns boolean
console.log(typeof firstName); // returns undefined ---> undefined is a value as well as primitive type
console.log(typeof lastName); // returns object
