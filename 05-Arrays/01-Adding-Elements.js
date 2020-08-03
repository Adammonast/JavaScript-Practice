const numbers = [3, 4];

// Since arrays are objects, using dot notation will give us a wide range of array methods

// Push - add elements to the END of the array
// can take more than one variable
numbers.push(5, 6);
console.log(numbers);
// Unshift - add elements to the BEGINNING of the array
numbers.unshift(1, 2);
console.log(numbers);
// Splice - add elements to the MIDDLE of the array
// With this method, we can go to given position within the array and add/remove elements
// Syntax --> splice(start: number, deleteCount?: number): number[]
numbers.splice(2, 0, "a", "b");
console.log(numbers);
