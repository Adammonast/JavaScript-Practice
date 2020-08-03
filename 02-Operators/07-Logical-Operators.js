// logical operators - used to make decisions based on multiple conditions
// three types: &&, ||, !
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
// logical and (&&)
// returns true if both operands are true
console.log("Logical &&: ", eligibleForLoan); // --> returns false because operands are not equal
// logical or (||)
// returns true if one of the operands is true
let eligibleForLoan2 = highIncome || goodCreditScore;
console.log("Logical ||: ", eligibleForLoan2); // --> true because one operand is true
// logial not (!)
// value placed behind ! operator gets converted to false
let refused = !eligibleForLoan;
