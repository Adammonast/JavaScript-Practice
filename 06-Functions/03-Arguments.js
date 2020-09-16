// In JS, argument are dynamic too
// We can pass as many arguments into a function we want. No matter how many the function actually requires
// Every function is JS has a special object called arguments, giving the flexibility to pass however many arguments and still get the expected result
// Arguments object is an iterable, meaning we can apply any method used on an iterable to it

function sum() {
  let total = 0;
  // Loop over the arguments object
  // Every parameter passed into the function will be iterated over
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
