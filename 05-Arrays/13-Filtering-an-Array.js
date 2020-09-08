const numbers = [1, -1, 2, 3];

// Return only the positive numbers with the filter method
// .filter takes a callback function with three optional parameters: value (number), index (number), array (number)
// Will loop through the array and execute the callback for each element
// If the element matches the function criteria, the element will get added to a new array and finally returned
const filtered = numbers.filter(function (value) {
  return value >= 0;
});
console.log(filtered);

const arrowFiltered = numbers.filter((value) => value >= 0);
console.log(arrowFiltered);
