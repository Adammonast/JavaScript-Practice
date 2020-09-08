// The REST operator works similar to the spread operator
// Prefix a parameter with three dots (...)
// When applying the REST operator to a parameter, we can pass a varying number of arguments and the operator will take those values and put them within an array

function orderSum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(orderSum(0.1, 20, 30));
