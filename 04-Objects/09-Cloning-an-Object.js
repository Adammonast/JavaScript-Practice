// There are many ways to copy over an objects contents to another object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Use a for...in loop (OLD AND OUTDATED)
// Declare an empty object
const another = {};
// use for...in loop to copy the keys
// use bracket notation to target all the keys during iteration
for (let key in circle) another[key] = circle[key];
console.log("Original Object: ", circle);
console.log("Cloned Object: ", another);

// In modern JS it is better to use the Object.assign() operator
// Within the first argument, you can pass a target object (could be empty or already existing)
// Then one or more source objects
// Takes all the properties/methods from the source object and copies them into the target object
// returns the result
const betterObject = Object.assign({}, circle);
console.log("Better Cloned Object: ", betterObject);

// can pass in one or more properties to target object and have them be apart of the cloned object
const newNewObject = Object.assign(
  { color: "yellow", name: "Adam", age: 23 },
  circle
);
console.log("NewNew Object: ", newNewObject);

// using the spread operator can also copy over the contents of an object
// operator takes all the properties and methods from an object and puts them within the new object
const spreadObject = { ...newNewObject };
console.log("Spread Operator: ", spreadObject);
