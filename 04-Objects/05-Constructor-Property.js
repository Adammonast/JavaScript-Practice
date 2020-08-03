// Every object in JS has a property called constructor
// Constructor references the function that was used to construct or create that object

// when building an object using object literals, the JS engine uses the built in constructor function
function createCircle(radius) {
  return {
    radius,
    draw: function draw() {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

// when building an object with a constructor function, the JS engine will return the functin that created it
function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    console.log("draw");
  };
}
const another = new Circle(1);

console.log("Circle: ", circle.constructor);
console.log("Another: ", another.constructor);
