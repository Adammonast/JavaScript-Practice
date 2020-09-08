// We use getters to access a property in an object
// We use setters to change/mutate an object

const person = {
  firstName: "Adam",
  lastName: "Monast",
  // To use a getter, prefix a property with the "get" keyword
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  // To use a setter, prefix a property with the "set" keyword
  // This method needs a parameter. The value becomes what we have on the right side of the operator
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// Call the method like a property with dot notation (not function invokation)
console.log(person.fullName);

// Use the setter to change/mutate an object to a have new values
person.fullName = "John Smith";
console.log(person);
