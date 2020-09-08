const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

// .reduce reduces all elements within an array to a single value
// That single value can an integer, string, object, etc
// Method takes a callback function with two parameters: accumulator and currentValue
// Accumulator is something to initilaize and the callback is executed multiple times
// Each time the callback function is executed, the currentValue will be set to an element within the array

const sums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sums);
