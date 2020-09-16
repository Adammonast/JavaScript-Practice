function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

start();

// When declaring a variable with var, it's scope is by default NOT limited to the code block it is defined in. It is limited to the function it is defined in
// Exclusive problem to JS

// var => function scoped variables
// let, const => block scoped variables

// Using var gives i function scope so we can call it outside the code block
function start2() {
  for (var i = 0; i < 5; i++) console.log(i);

  console.log(i);
}

start2();

// Using var outside a function gives the variable global scope and attaches it to the window object in the browser
// Avoid adding variables to the window object
var color = red;
let age = 30;
