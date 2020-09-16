// Global - accessible everywhere
const color = "red";

function start() {
  // Function scope - accessible only to the function
  const message = "hi";
  console.log(message);
}

function stop() {
  // Function (local)scope  - accessible only to the function
  // Local variables can share the same name as other local variables
  const message = "bye";
  console.log(message);
  // Local scope also takes precedence over global scope
  const color = "blue";
  console.log(color);
}
console.log(color);
start();
stop();
