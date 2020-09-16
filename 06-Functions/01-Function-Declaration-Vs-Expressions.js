// Function Declaration
function walk() {
  console.log("walk");
}
walk();

// Function Expression
// Similar to setting a variable to an object
// Anonymous function (functions without a name)
// When setting an anonymous function to a variable, the variable holds the reference to the function
let run = function () {
  console.log("run");
};
// Call the function using the reference
run();
let move = run;
move();
