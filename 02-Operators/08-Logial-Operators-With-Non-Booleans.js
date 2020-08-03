// In JavaScript we can use logical operators with non-boolean values
// The result of a logical operation is not exactly true or false
// Results depends on the values of the operand
// When JS engine evaluates each expression, if there is a non-boolean value, it will try to interpret as truthy or falsy

// Falsy values - undefined, null, 0 false, '(empty string)', NaN (not a number)
// If used, these values will be regarded as falsy

// Anything that is not falsy will be considered truthy

// Examples
// Logical operator rules apply
// Since || is being used, the JS engine will search for one operand with a true or truthy value
// Will return the truthy value
console.log(false || true); // --> Returns true
console.log(false || "Adam"); // --> Returns "Adam"
console.log(false || 1); // --> Returns 1

// Short circuiting
console.log(false || 1 || 2); // --> Returns 1 because 1 is the FIRST truthy value, nothing after matters

// Real world example
// Providing different values to users
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log("Color Example: ", currentColor);
