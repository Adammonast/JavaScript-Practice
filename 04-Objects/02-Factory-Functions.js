// When using two objects with that have the same function, use a constructor function or factoring

// Factory Function - produce objects
// define a function
// values defined in the object's properties are hardcoded
// pass values as parameters
function createCircle(radius) {
  // instead of delcaring a new object, the function will return the object
  // use return keyword
  return {
    // set properties to the parameters
    // if key/value are the same, we can just use the key
    radius,
    // functions do not use the function keyword within a object
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
