// Object - built-in constructor function
// Object literal syntax internally calls Object constructor function ---> looks like new Object
// Objects have properties and methods avaliable to use

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Use for...in loop to iterate over object for the key/value pairs
for (let key in circle) console.log("For in loop: ", key, circle[key]);

// Object.keys method returns a string array containing all the properties/methods avaliable to that object
for (let key of Object.keys(circle)) console.log("Object.keys(): ", key);

// Object.entries method returns each key/value pair as an array
for (let entry of Object.entries(circle))
  console.log("Object.entries(): ", entry);

// Using the in operator, we can check if an object has a certain key
if ("radius" in circle) console.log("is in object: ", "yes!");
if ("color" in circle) console.log("is in object: ", "yes!");
