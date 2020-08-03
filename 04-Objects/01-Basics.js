// Objects are collections of key/value pairs
// Properties that are highly related should be grouped together within an object
// Anything passed into an object can be used and called within functions
// Values can be any data type avaliable in JS: strings, numbers, arrays, other objects, and even functions!
// Properties from an object can be accessed using dot notation
// In Object Oriented Programming if functions are part of an object, they are called methods

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
