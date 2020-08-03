/* 
Build a function that takes an array and returns number of the truthy values within
- Falsy values = undefined, null, " ", false, 0, NaN
*/

const checkArray = [undefined, null, " ", false, 0, NaN, 1, 2, "Adam"];

function countTruthy(array) {
  count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy(checkArray));
