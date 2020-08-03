// In JS, we have two types of strings
// String Primitive
const message = "Hello!";
// String Object
// We can use this constructor function to create a new string object
// Use the new operator when using this function
const another = new String("Hi!");

// check the types of each string
console.log("Type of: ", typeof message); // primitive type
console.log("Type of: ", typeof another); // object type

// when we use dot notation with a string primitive, JS engine internally "wraps" the primitve in an object
// thus making string object methods avaliable for use
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const myString = "This is my first string";
// Length method - Reflects the length of the string. Read-only.
console.log("Length: ", myString.length);
// Use bracket notation to access a character at a given index
console.log("Character: ", myString[0]);
// Includes method - determines whether one string may be found within another string
// returning true or false as appropriate
console.log("Includes: ", myString.includes("my"));
// Starts With - Determines whether the calling string begins with the characters of string
// case sensitive, returns true or false
console.log("Starts With: ", myString.startsWith("Th"));
console.log("Starts With: ", myString.startsWith("th"));
// Ends With - Determines whether a string ends with the characters of the string
// case sensitive, returns true or false
console.log("Ends With: ", myString.endsWith("ing"));
console.log("Ends With: ", myString.endsWith("Ing"));
// Index of - Returns the index within the calling String object of the first occurrence, -1 if not found
console.log("Index of: ", myString.indexOf("my"));
// Replace - replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function
// Does not modify original string and returns a new string with replaced value
console.log("Replace: ", myString.replace("first", "second"));
// To Upper Case - returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one)
console.log("Upper: ", myString.toUpperCase());
// To Lower Case - returns the calling string value converted to lowercase (the value will be converted to a string if it isn't one)
console.log("Lower: ", myString.toLowerCase());
// Trim - Trims whitespace from the beginning and end of the string
// Has variations: left, right, etc
let myNewMessage = "       This is my new message!        ";
console.log("Trim: ", myNewMessage.trim());
// Split - Returns an array of strings populated by splitting the calling string at occurences of the substring
console.log("Split: ", myString.split(" "));
