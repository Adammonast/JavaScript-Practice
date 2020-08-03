// Functions are objects because they have a wide range of built-in methods and properties to be used on them

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function draw() {
      console.log("draw");
    });
}

const circle = new Circle(1);

console.log(Circle.name); // returns the functions name
console.log(Circle.length); // return the number of objects
console.log(Circle.constructor); // returns the function creator

// other methods
// calls a function, pass in empty object
// this keyword will reference the object being call upon
// pass other argument explicitly
console.log(Circle.call({}, 1));

// apply method
// calls an object, but passes arguments within an array not explicitly
// useful if you already have an array somewhere in your code
console.log(Circle.apply({}, [1, 2, 3]));
