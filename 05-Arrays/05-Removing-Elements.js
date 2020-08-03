const numbers = [1, 2, 3, 4];

// pop method - removes and returns the LAST element from an array
const last = numbers.pop();
console.log("Pop: ", last);
console.log("Numbers Array: ", numbers);
// shift method - removes and returns the FIRST element from an array
const beginning = numbers.shift();
console.log("Shift: ", beginning);
console.log("Numbers Array: ", numbers);
// splice method - remove an element from somewhere in the middle
// pass an index into the method, thats where the splice begins
// the second argument is how many elements you want to splice
const middle = numbers.splice(0, 2);
console.log("Splice: ", middle);
console.log("Numbers Array: ", numbers);
