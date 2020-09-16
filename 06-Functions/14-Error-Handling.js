try {
  const numbers = [1, 2, 3, 4, 1, 3, 1, 4, 3, 4, 3, 2];
  const count = countOccurences(numbers, 3);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array");
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}
