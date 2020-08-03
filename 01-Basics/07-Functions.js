// Functions are set-up statements for performing a task or calculating a value

// perform task function
// declare functions with function keyword, a name followed by (), and {}
// the parenthesis are used to initialize a function and the function logic goes within the {}
// syntax --> function name() {}
function greet() {
  // function that logs, Hello World string
  console.log("Greet: ", "Hello World");
}
// call the function
greet();

// functions have inputs that can change the way they behave
// parameters can be passed into functions
// parameters are variables that are only meaningful to the function
// will NOT be accessible outside the function
function greetName(name) {
  console.log("Parameter: ", "Hello " + name);
}

// call the function while passing in an argument
greetName("Adam");
// functions are reusable!
greetName("John");

// functions can have multiple parameters as well
function greeting(firstName, lastName) {
  console.log(`Multiple Parameters: Hello ${firstName} ${lastName}!`);
}
greeting("Adam", "Monast");
