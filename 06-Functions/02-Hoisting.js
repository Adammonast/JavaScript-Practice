// Function Declaration
function walk() {
  console.log("walk");
}

// Function Expression
const run = function () {
  console.log("run");
};

// The key difference between function declaration and expression is that we can call function declarations before it is defined
// Because when the JS engine executes the code, it moves all the function declarations to the top at runtime. Also known as Hoisting
// Hoisting - the procress of moving function declarations to the top of the file (done automatically by the JS engine)
