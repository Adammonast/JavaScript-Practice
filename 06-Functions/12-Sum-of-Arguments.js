function sums() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(sums(1, 2, 3, 4));

// Use the REST operator to create an array from the arguments submitted to the function
// Check the length of items and if the first index of items is an array
// If so, set items to a new array containing the argument array using the spread operator
// Use the reduce method to add the values together
function sumsWithArray(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
}

console.log(sumsWithArray([1, 2, 3]));
console.log(sumsWithArray(1, 2, 3));
