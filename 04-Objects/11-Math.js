// Built-in objects
// Math is a JS built-in object with a wide range of methods to assist with arithmetic computing
// Refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Random method - Returns a pseudo-random number between 0 and 1
Math.random();
// If you want to map to a given range, you need a simple mathematical formula
// This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log("Random: ", getRandomArbitrary(1, 10));
// Round method - Returns the value of the number x rounded to the nearest integer
console.log("Round: ", Math.round(20.49));
// Max method - Returns the largest of zero or more numbers
console.log("Max: ", Math.max(1, 3, 2));
// Min method - Returns the smallest of zero or more numbers.
console.log("Min: ", Math.min(2, 3, 1));
