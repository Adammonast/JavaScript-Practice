// These loops are used to iterate over the properties of an object or elements in an array
// for-in loop
const person = {
  name: "Adam",
  age: 23,
};

// in every iteration, the key variable will hold one of the properties in object
for (let key in person) console.log(key);
// dot notation or bracket notation to access the properties in object
// combine with for in loop to display values
// pass in key as the index to target the property value in each iteration
for (let key in person) console.log(key, person[key]);
// can be used to iterate over an array
const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index);
// use bracket notation to get the names with index
for (let index in colors) console.log(index, colors[index]);
