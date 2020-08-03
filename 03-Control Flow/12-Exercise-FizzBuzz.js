/*

Given an numeric input return a string:
- If the input is divisble by 3: return Fizz, divisible by 5: return Buzz
- If the input if divisble by 3 and 5, return FizzBuzz
- If the input if not divisble by either, return input
- Anything not a numer, return "Not a number" or NaN

*/

function fizzBuzz(input) {
  while (typeof input === "number") {
    if (input % 5 === 0 && input % 3 === 0) {
      return "FizzBuzz";
    } else if (input % 3 === 0) {
      return "Fizz";
    } else if (input % 5 === 0) {
      return "Buzz";
    } else return input;
  }
  return NaN;
}
console.log("Divisible by 3: ", fizzBuzz(9));
console.log("Divisible by 5: ", fizzBuzz(25));
console.log("Divisible by both: ", fizzBuzz(15));
console.log("Not divisible: ", fizzBuzz(19));
console.log("Not a number: ", fizzBuzz("Adam"));
