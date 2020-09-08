const numbers = [1, 5, 10, 4, 6];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return;

  let max = array[0];

  for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  return max;
}
