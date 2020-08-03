// differences between equality operators
// strict equality operator - ensures operands on both sides of operator are equal in type and value
// returns boolean value
console.log("Strict: ", 1 === 1); // --> returns true
console.log("Strict: ", "1" === 1); // --> returns false
// loose equality operator - looks to the left value first and converts second value to match
console.log("Loose: ", 1 == 1); // --> returns true
console.log("Loose: ", "1" == 1); // --> returns true
// converts anything
console.log("Loose: ", true == 1); // --> returns true
