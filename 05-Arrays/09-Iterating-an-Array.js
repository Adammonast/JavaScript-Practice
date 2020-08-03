const numbers = [1, 2, 3, 4, 5];
// use for..of loop to iterate over an array
for (number of numbers) console.log("forOf: ", number);

// another way to iterate using for...each
// for...each takes a callback function with a number parameter
// every element in the array will be passed to the callback function as an argument in every iteration
numbers.forEach(function (number) {
  console.log("forEach: ", number);
});
// can optional take a second parameter for an index
numbers.forEach(function (number, index) {
  console.log("forEach with index: ", index, number);
});

// arrow syntax
const iterated = numbers.forEach((number) => {
  console.log("Arrow: ", number);
});
