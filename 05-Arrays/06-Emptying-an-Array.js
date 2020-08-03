// Remove all the elements in the array
let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];
let numbers4 = [1, 2, 3, 4];

// Solution 1 - if the keyword is let, reassign the array to an empty one
numbers = [];
console.log(numbers);

// Solution 2 - set the length property and this will "truncate" the array or remove all elements
numbers2.length = 0;
console.log(numbers2);

// Solution 3 - Splice method
// With splice, you can start at the beginning of an array ([0]) and go to the end
numbers3.splice(0, numbers3.length);
console.log(numbers3);

// Solution 4 - Pop method (NOT IDEAL)
// Pop removes last element
// loop over while popping as long as there is elements within the array
while (numbers4.length) {
  numbers4.pop();
}
console.log(numbers4);
