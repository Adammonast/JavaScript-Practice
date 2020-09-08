// Function Declaration
function walk() {
  console.log("walk");
}

// Function Expression
// Anonymous function (function without a name)
// Assigning a function to a variable makes the variable contain a refernce to the function
const run = function () {
  console.log("run");
};
// Can call the reference like a function
run();
let move = run;
move();
