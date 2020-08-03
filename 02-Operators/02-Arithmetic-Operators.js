let x = 10;
let y = 3;

// arithmetic operators
// addition: takes two operands(x and y) to produce a new value
// x + y ---> expression
// expression: something that produces a value
console.log("Addition: ", x + y);
// subtraction, multiplication, division, remainder operators
console.log("Subtraction: ", x - y);
console.log("Multiplication: ", x * y);
console.log("Division: ", x / y);
console.log("Remainder: ", x % y);
// exponential operator (x^2)
console.log("Exponential: ", x ** y);

// increment operator
// indicated by ++
// depending on where we place the ++, it will behave differently
let z = 10;
// before variable
// the value of z will be incremented by 1 first, then we'll see it on the console
console.log("Increment Before: ", ++z);
// after
// the value of z will be shown on the console, then incremented
console.log("Increment After: ", z++);
console.log("Increment After: ", z);

// decrement
// the same rules as increment, represented by --
// before
console.log("Decrement Before: ", --z);
// after
console.log("Decrement After: ", z--);
console.log("Decrement After: ", z--);
