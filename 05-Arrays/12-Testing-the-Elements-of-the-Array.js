// Two new array method in JS: .every and .some
const numbers = [1, 2, 3];
// Every checks to see if every element matches the criteria
// Takes a callback function with three optional parameters: value (number), index (number), array()
// Method returns a boolean value
// Returns false on first instance of non matching criteria
const allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

// Some checks to see if we have at least one element that matches the criteria
// Runs the callback function on all elements within the array
// Returns true and terminates the search on the first instance of the criteria
// Takes a callback function with three optional parameters: value (number), index (number), array()
// Method returns a boolean value
const atLeastOnePostive = numbers.every(function (value) {
  return value >= 0;
});
console.log(atLeastOnePostive);
