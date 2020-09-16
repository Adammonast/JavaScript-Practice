// Add error handling to catch errors within functions/code
// We need to throw an exception to display fleshed out error messages

const person = {
  firstName: "Adam",
  lastName: "Monast",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string")
      // Create an error object to dislay errors
      // Using throw + new Error, we call the built-in error method and can pass in a custom string
      throw new Error("Value is not a string");
    // Now we need to "catch the error message to display it to the console"

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// Where you set the error inducing code, we need to wrap that in a try block
// Try blocks can have more than one statement, but one of them at least can throw an exception
try {
  person.fullName = "";
} catch (e) {
  // After the try block, add a catch block
  // Pass in an identifier (error object that's being thrown)
  // Log it to the console to display
  console.log(e);
}

console.log(person.fullName);

person.fullName = "John Smith";
console.log(person);
