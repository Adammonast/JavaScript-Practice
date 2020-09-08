// Join method for arrays joins the array elements
// Optional seperator parameter
// Syntax:
// join(seperator?: string): string
// seperator parameter is a string used to seperate one element of an array from the next in the resulting String
// if omitted, the array elements are seperated with a comma
// Adds all the elements of an array seperated by the specified seperator string

const numbers = [1, 2, 3];
const joined = numbers.join();
console.log(joined);

// Split method, string method
// (method) String.split(separator: string | RegExp, limit?: number): string[] (+1 overload)
// Split a string into substrings using the specified separator and return them as an array.
// @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
//@param limit — A value used to limit the number of elements returned in the array.
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const combined = parts.join("-");
console.log(combined);
