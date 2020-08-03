// Constructor function - job of this function is to construct or create an object
// When naming constructor functions, use Pascal Notation (upper first letter in name)
function Circle(radius) {
  // instead of returning an object, initialize the function with this keyword
  // "this" references the object that is executing the code block
  // use dot notation to set the parameter to the property
  this.radius = radius;
  // use dot notation for functions as well
  this.draw = function () {
    console.log("draw");
  };
}
// in order to create a circle object using the constructor function, define a constant
// pass 1 into the new Circle as an argument
// new keyword creates an empty JavaScript object, will set this keyword to point to the empty object
// new operator will return the new object from the original Circle function
const circle = new Circle(1);
